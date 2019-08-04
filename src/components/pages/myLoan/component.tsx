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
import {contractMethodCall, getInjectedAccountAddress, getNetworkId} from "../../../utils/web3Utils";
import getWeb3 from "../../../utils/getWeb3";

interface MyLoanState {
    principalDisbursed: string;
    totalPaid: string;
    releaseAllowance: string;
}
interface MyLoanProps extends RouteComponentProps<any> {}
class MyLoan extends React.Component<MyLoanProps, MyLoanState> {
    state = {
        principalDisbursed: "",
        totalPaid: "",
        releaseAllowance: ""
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

            // Note: principal disbursed and total paid will return zero when the loan is not started
            const principalDisbursed = await contractMethodCall(
                termsContractInstance,
                "getPrincipalDisbursed"
            );
            const totalPaid = await contractMethodCall(repaymentManagerInstance, "totalPaid");

            const injectedAccountAddress = await getInjectedAccountAddress();
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

            this.setState({
                principalDisbursed,
                totalPaid,
                releaseAllowance
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const {principalDisbursed, totalPaid, releaseAllowance} = this.state;
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
                            </Col>
                        </Row>
                    </Container>
                    <Margin bottom={48}>
                        <Withdrawal />
                    </Margin>
                    <RepaymentStatus />
                </MyLoanWrapper>
            </React.Fragment>
        );
    }
}

export default withRouter<MyLoanProps>(MyLoan);
