import React from "react";
import walletIcon from "../../../images/icons/wallet.svg";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Container} from "../../../styles/bases";
import {Margin, Padding} from "../../../styles/utils";
import {Row, Col} from "../../lib";
import {MyLoanWrapper} from "./styled";
import Withdrawal from "./withdrawals";
import RepaymentStatus from "./repaymentStatus";
import contractAddresses from "../../../config/ines.fund.js";
import {getContractInstance} from "../../../utils/getDeployed";
import {INTEREST_DECIMALS} from "../../../config/constants.js";
import {getInjectedAccountAddress, getNetworkId, prepBigNumber} from "../../../utils/web3Utils";
import {getLoanParams, getPrincipalRequested} from "../../../utils/termsContract";
import {getDeployedFromConfig} from "../../../utils/getDeployed";
import {getTokenDetailsFromAddress} from "../../../utils/paymentToken";
import {
    shares,
    released,
    releaseAllowance,
    totalPaid,
    totalReleased,
    totalShares,
    PaymentReceivedEvent,
    PaymentReleasedEvent
} from "../../../utils/repaymentManager";
import {getPrincipalDisbursed, getPrincipalToken} from "../../../utils/termsContract";

interface MyLoanState {
    injectedAccountAddress: string;
    paymentToken: object;
    principalDisbursed: string;
    principalRequested: string;
    releaseAllowance: string;
    repayments: object;
    loanParams: object;
    shares: string;
    totalPaid: string;
    totalReleased: string;
    totalShares: string;
    withdrawals: object;
}

interface MyLoanProps extends RouteComponentProps<any> {}
class MyLoan extends React.Component<MyLoanProps, MyLoanState> {
    state = {
        injectedAccountAddress: "",
        paymentToken: null,
        principalDisbursed: "",
        principalRequested: "",
        shares: "",
        totalPaid: "",
        totalReleased: "",
        totalShares: "",
        repayments: null,
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
            const termsContractInstance = await getDeployedFromConfig(
                "TermsContract",
                contractAddresses
            );
            const repaymentManagerInstance = await getDeployedFromConfig(
                "RepaymentManager",
                contractAddresses
            );

            const paymentToken = await getTokenDetailsFromAddress(
                await getPrincipalToken(termsContractInstance)
            );

            const injectedAccountAddress = await getInjectedAccountAddress();

            // Terms Contract Calls
            const {borrower, interestRate, loanPeriod} = await getLoanParams(termsContractInstance);

            // Note: principal disbursed and total paid will return zero when the loan is not started
            const principalDisbursed = await getPrincipalDisbursed(termsContractInstance);

            const principalRequested = await getPrincipalRequested(termsContractInstance);

            // Repayment Manager calls
            const _totalPaid = await totalPaid(repaymentManagerInstance);

            const _totalShares = await totalShares(repaymentManagerInstance);
            const _totalReleased = await totalReleased(repaymentManagerInstance);
            const injectedAccountShares = await shares(repaymentManagerInstance, injectedAccountAddress);
            const injectedAccountReleased = await released(
                repaymentManagerInstance,
                injectedAccountAddress
            );

            let _releaseAllowance;
            if (+injectedAccountShares > 0 && +injectedAccountReleased > 0) {
                _releaseAllowance = await releaseAllowance(
                    repaymentManagerInstance,
                    injectedAccountAddress
                );
            } else {
                _releaseAllowance = "0";
            }

            // To do (Dennis): Filter by the injected account directly from this method
            const paymentReleasedEvents = await PaymentReleasedEvent(repaymentManagerInstance, {
                fromBlock: 0,
                toBlock: "latest",
                filter: {to: injectedAccountAddress}
            });

            // To do (Dennis): Need to investigate the return value
            const withdrawals = paymentReleasedEvents
                .map(event => event.returnValues)
                .filter(event => event.to === injectedAccountAddress);

            const paymentReceivedEvent = await PaymentReceivedEvent(repaymentManagerInstance, {
                fromBlock: 0,
                toBlock: "latest"
            });

            const repayments = paymentReceivedEvent.map(event => ({
                from: event.returnValues.from,
                amount: prepBigNumber(event.returnValues.amount || 0, paymentToken.decimals, true),
                paid: true
            }));

            this.setState({
                injectedAccountAddress,
                loanParams: {
                    borrower,
                    interestRate: prepBigNumber(interestRate, INTEREST_DECIMALS, true),
                    loanPeriod
                },
                paymentToken,
                principalDisbursed,
                principalRequested,
                shares: injectedAccountShares,
                totalPaid: _totalPaid,
                totalReleased: _totalReleased,
                totalShares: _totalShares,
                releaseAllowance: _releaseAllowance,
                repayments,
                withdrawals
            });
        } catch (err) {
            console.log(err);
        }
    };

    renderLenderLoan = (principalRequested, interestRate, loanPeriod) => (
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

    renderBorrowerLoan = (
        paymentToken,
        principalDisbursed,
        shares,
        totalPaid,
        releaseAllowance,
        totalReleased,
        totalShares
    ) => (
        <Margin vertical={48}>
            <Row text='center'>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>{!shares ? "0" : prepBigNumber(shares, paymentToken.decimals, true)} Dai</h4>
                    <p>Invested Amount</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>
                        {!principalDisbursed
                            ? "0"
                            : prepBigNumber(principalDisbursed, paymentToken.decimals, true)}
                        Dai
                    </h4>
                    <p>Loan Disbursed</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>
                        {!totalPaid ? "0" : prepBigNumber(totalPaid, paymentToken.decimals, true)} Dai
                    </h4>
                    <p>Repaid</p>
                </Col>
            </Row>
            <Row text='center'>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>
                        {!releaseAllowance
                            ? "0"
                            : prepBigNumber(releaseAllowance, paymentToken.decimals, true)}
                        Dai
                    </h4>
                    <p>Account Balance</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>
                        {!totalShares ? "0" : prepBigNumber(totalShares, paymentToken.decimals, true)}
                        Dai
                    </h4>
                    <p>Amount raised</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                    <h4>
                        {!totalReleased
                            ? "0"
                            : prepBigNumber(totalReleased, paymentToken.decimals, true)}
                        Dai
                    </h4>
                    <p>Amount withdraw</p>
                </Col>
            </Row>
        </Margin>
    );
    render() {
        const {
            injectedAccountAddress,
            loanParams,
            paymentToken,
            principalDisbursed,
            principalRequested,
            repayments,
            releaseAllowance,
            shares,
            totalPaid,
            totalReleased,
            totalShares,
            withdrawals
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
                                {isBorrower
                                    ? this.renderLenderLoan(principalRequested, interestRate, loanPeriod)
                                    : this.renderBorrowerLoan(
                                          paymentToken,
                                          principalDisbursed,
                                          shares,
                                          totalPaid,
                                          releaseAllowance,
                                          totalReleased,
                                          totalShares
                                      )}
                            </Col>
                        </Row>
                    </Container>
                    <Margin bottom={48}>
                        <Withdrawal withdrawals={withdrawals} />
                    </Margin>
                    <RepaymentStatus repayments={repayments} />
                </MyLoanWrapper>
            </React.Fragment>
        );
    }
}

export default withRouter<MyLoanProps>(MyLoan);
