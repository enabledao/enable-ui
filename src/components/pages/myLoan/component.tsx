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
import {
    getInjectedAccountAddress,
    prepBigNumber
} from "../../../utils/web3Utils";
import { getDeployedFromConfig } from "../../../utils/getDeployed";
import { getTokenDetailsFromAddress } from '../../../utils/paymentToken';
import { shares, released, releaseAllowance, totalPaid, PaymentReceivedEvent, PaymentReleasedEvent } from '../../../utils/repaymentManager';
import { getPrincipalDisbursed, getPrincipalToken } from '../../../utils/termsContract';

interface MyLoanState {
    paymentToken: object,
    principalDisbursed: string;
    shares: string;
    totalPaid: string;
    releaseAllowance: string;
    withdrawals: object;
    repayments: object;
}
interface MyLoanProps extends RouteComponentProps<any> {}
class MyLoan extends React.Component<MyLoanProps, MyLoanState> {
    state = {
        paymentToken: null,
        principalDisbursed: "",
        shares: "",
        totalPaid: "",
        releaseAllowance: "",
        withdrawals: null,
        repayments: null
    };

    componentDidMount = async () => {
        try {
            
            const termsContractInstance = await getDeployedFromConfig('TermsContract', contractAddresses);
            const repaymentManagerInstance = await getDeployedFromConfig('RepaymentManager', contractAddresses);
            const paymentToken = await getTokenDetailsFromAddress(await getPrincipalToken(termsContractInstance));

            // Note: principal disbursed and total paid will return zero when the loan is not started
            const principalDisbursed = await getPrincipalDisbursed(termsContractInstance);
            const _totalPaid = await totalPaid(repaymentManagerInstance);

            const injectedAccountAddress = await getInjectedAccountAddress();
            const injectedAccountShares = await shares(
                repaymentManagerInstance,
                injectedAccountAddress
            );
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
            const paymentReleasedEvents = await PaymentReleasedEvent(
                repaymentManagerInstance,
                {fromBlock: 0, toBlock: "latest", filter: { to: injectedAccountAddress }}
            );

            const paymentReceivedEvent = await PaymentReceivedEvent(
                repaymentManagerInstance,
                {fromBlock: 0, toBlock: "latest"}
            );

            const repayments = paymentReceivedEvent
                .map(event => event.returnValue)
                .filter(event => event.to === injectedAccountAddress);

            // To do (Dennis): Need to investigate the return value
            const withdrawals = paymentReleasedEvents
                .map(event => event.returnValue)
                .filter(event => event.to === injectedAccountAddress);

            this.setState({
                paymentToken,
                shares: injectedAccountShares,
                principalDisbursed,
                totalPaid: _totalPaid,
                releaseAllowance: _releaseAllowance,
                withdrawals,
                repayments
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const {paymentToken, principalDisbursed, shares, totalPaid, releaseAllowance, withdrawals} = this.state;
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
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <h4>{!shares ? "0" : prepBigNumber(shares, paymentToken.decimals, true)} Dai</h4>
                                            <p>Invested Amount</p>
                                        </Col>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <h4>{!principalDisbursed ? "0" : prepBigNumber(principalDisbursed, paymentToken.decimals, true)} Dai</h4>
                                            <p>Loan Disbursed</p>
                                        </Col>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <h4>{!totalPaid ? "0" : prepBigNumber(totalPaid, paymentToken.decimals, true)} Dai</h4>
                                            <p>Repaid</p>
                                        </Col>
                                        <Col lg={3} md={3} sm={3} xs={3}>
                                            <h4>{!releaseAllowance ? "0" : prepBigNumber(releaseAllowance, paymentToken.decimals, true)} Dai</h4>
                                            <p>Account Balance</p>
                                        </Col>
                                    </Row>
                                </Margin>
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
