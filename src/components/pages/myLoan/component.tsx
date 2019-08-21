import React from "react";
import walletIcon from "../../../images/icons/wallet.svg";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Container} from "../../../styles/bases";
import {Margin, Padding} from "../../../styles/utils";
import {Row, Col} from "../../lib";
import {MyLoanWrapper} from "./styled";
import Withdrawal from "./withdrawals";
import RepaymentStatus from "./repaymentStatus";
import {RepaymentManager, TermsContract} from "../../../utils/contractData";
import contractAddresses from "../../../config/ines.fund.js";
import {getContractInstance} from "../../../utils/getDeployed";
import {INTEREST_DECIMALS} from '../../../config/constants.js'
import {
    contractGetPastEvents,
    contractMethodCall,
    getInjectedAccountAddress,
    getNetworkId,
    prepBigNumber
} from "../../../utils/web3Utils";
import {getLoanParams, getPrincipalRequested} from "../../../utils/termsContract";
import getWeb3 from "../../../utils/getWeb3";

interface MyLoanState {
    injectedAccountAddress: string;
    principalDisbursed: string;
    principalRequested: string;
    totalPaid: string;
    releaseAllowance: string;
    withdrawals: object;
    loanParams: object;
}
interface MyLoanProps extends RouteComponentProps<any> {}
class MyLoan extends React.Component<MyLoanProps, MyLoanState> {
    state = {
        injectedAccountAddress: "",
        principalDisbursed: "",
        principalRequested: "",
        totalPaid: "",
        releaseAllowance: "",
        withdrawals: null,
        loanParams: {
            borrower: "",
            interestRate: 0,
            loanPeriod: ""
        }
    };

    componentDidMount = async () => {
        try {
            const networkId = await getNetworkId();
            const repaymentManagerAddress = contractAddresses[networkId]["RepaymentManager"];
            const termsContractAddress = contractAddresses[networkId]["TermsContract"];

            const repaymentManagerInstance = await getContractInstance(
                RepaymentManager.abi,
                repaymentManagerAddress
            );

            const termsContractInstance = await getContractInstance(
                TermsContract.abi,
                termsContractAddress
            );

            const injectedAccountAddress = await getInjectedAccountAddress();

            // Terms Contract Calls
            const {borrower, interestRate, loanPeriod} = await getLoanParams(termsContractInstance);

            // Note: principal disbursed and total paid will return zero when the loan is not started
            const principalDisbursed = await contractMethodCall(
                termsContractInstance,
                "getPrincipalDisbursed"
            );

            const principalRequested = await getPrincipalRequested(termsContractInstance);

            // Repayment Manager calls
            const totalPaid = await contractMethodCall(repaymentManagerInstance, "totalPaid");

            const injectedAccountShares = await contractMethodCall(
                repaymentManagerInstance,
                "shares",
                injectedAccountAddress
            );
            const injectedAccountReleased = await contractMethodCall(
                repaymentManagerInstance,
                "released",
                injectedAccountAddress
            );

            let releaseAllowance;
            if (+injectedAccountShares > 0 && +injectedAccountReleased > 0) {
                releaseAllowance = await contractMethodCall(
                    repaymentManagerInstance,
                    "releaseAllowance",
                    injectedAccountAddress
                );
            } else {
                releaseAllowance = "0";
            }

            // To do (Dennis): Filter by the injected account directly from this method
            const paymentReleasedEvents = await contractGetPastEvents(
                repaymentManagerInstance,
                "PaymentReleased",
                {fromBlock: 0, toBlock: "latest"}
            );

            // To do (Dennis): Need to investigate the return value
            const withdrawals = paymentReleasedEvents
                .map(event => event.returnValue)
                .filter(event => event.to === injectedAccountAddress);

            this.setState({
                injectedAccountAddress,
                loanParams: {
                    borrower,
                    interestRate: prepBigNumber(interestRate,INTEREST_DECIMALS, true),
                    loanPeriod
                },
                principalDisbursed,
                principalRequested,
                totalPaid,
                releaseAllowance,
                withdrawals
            });
        } catch (err) {
            console.log(err);
        }
    };

    renderBorrowerLoan = (principalRequested, interestRate, loanPeriod) => (
        <Margin vertical={48}>
            <Row text='center'>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>{principalRequested} Dai</h4>
                    <p>Loaned Amount</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>{interestRate} %</h4>
                    <p>Interest Rate</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>{loanPeriod} Months</h4>
                    <p>Loan Period</p>
                </Col>
            </Row>
        </Margin>
    );

    renderLenderLoan = (principalDisbursed, totalPaid, releaseAllowance) => (
        <Margin vertical={48}>
            <Row text='center'>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>{principalDisbursed} Dai</h4>
                    <p>Loaned Amount</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>{totalPaid} Dai</h4>
                    <p>Repaid</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>{releaseAllowance} Dai</h4>
                    <p>Account Balance</p>
                </Col>
            </Row>
        </Margin>
    );

    render() {
        const {
            injectedAccountAddress,
            principalDisbursed,
            principalRequested,
            totalPaid,
            releaseAllowance,
            withdrawals,
            loanParams
        } = this.state;
        const {borrower, interestRate, loanPeriod} = loanParams;
        const isBorrower = injectedAccountAddress === borrower;

        return (
            <React.Fragment>
                <MyLoanWrapper>
                    <Container>
                        <Row justify='center'>
                            <Col lg={10} md={12}>
                                <img
                                    src={walletIcon}
                                    alt='Icon - Wallet'
                                    width={34}
                                    style={{position: "absolute"}}
                                />
                                <Padding left={48}>
                                    <h2>My Loan</h2>
                                </Padding>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                {!isBorrower
                                    ? this.renderBorrowerLoan(
                                          principalRequested,
                                          interestRate,
                                          loanPeriod
                                      )
                                    : this.renderLenderLoan(
                                          principalDisbursed,
                                          totalPaid,
                                          releaseAllowance
                                      )}
                            </Col>
                        </Row>
                    </Container>
                    <Margin bottom={48}>
                        <Withdrawal withdrawals={withdrawals} />
                    </Margin>
                    <RepaymentStatus />
                </MyLoanWrapper>
            </React.Fragment>
        );
    }
}

export default withRouter<MyLoanProps>(MyLoan);
