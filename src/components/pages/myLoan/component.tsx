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
import { MILLISECONDS } from "../../../config/constants";
import {
    getBlock,
    getInjectedAccountAddress,
    prepBigNumber
} from "../../../utils/web3Utils";
import { getDeployedFromConfig } from "../../../utils/getDeployed";
import { getTokenDetailsFromAddress } from '../../../utils/paymentToken';
import { shares, released, releaseAllowance, totalPaid, release, PaymentReceivedEvent, PaymentReleasedEvent } from '../../../utils/repaymentManager';
import { getPrincipalDisbursed, getPrincipalToken } from '../../../utils/termsContract';

interface MyLoanState {
    paymentToken: object,
    principalDisbursed: string;
    shares: string;
    released: string;
    totalPaid: string;
    releaseAllowance: string;
    withdrawals: object;
    repayments: object;
    repaymentManagerInstance: object;
    transacting: boolean;
}
interface MyLoanProps extends RouteComponentProps<any> {}
class MyLoan extends React.Component<MyLoanProps, MyLoanState> {
    state = {
        paymentToken: null,
        principalDisbursed: "",
        shares: "",
        released: "",
        totalPaid: "",
        releaseAllowance: "",
        withdrawals: null,
        repayments: null,
        repaymentManagerInstance: null,
        transacting: false
    };

    onWithdraw = async () => {
        // const {history} = this.props;
        const { releaseAllowance, repaymentManagerInstance } = this.state;

        if (!+releaseAllowance) {
            return console.error('No balance Available for Withdrawal'); 
        }
        try {
            this.setState({ transacting: true });

            const injectedAccountAddress = await getInjectedAccountAddress();
            const tx = await release(repaymentManagerInstance, injectedAccountAddress);
            console.log(tx);

            this.setState({ transacting: false });
            return;
        } catch (e) {
            this.setState({ transacting: false });
            return console.error(e);
        } 
    }

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
            if (+injectedAccountShares > 0) {
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

            // To do (Dennis): Need to investigate the return value
            const withdrawals = paymentReleasedEvents
                .map(event => event.returnValues)
                .filter(event => event.to === injectedAccountAddress);

            let paymentReceivedEvent = await PaymentReceivedEvent(
                repaymentManagerInstance,
                {fromBlock: 0,  toBlock: "latest"}
            );

            const repayments = await Promise.all(paymentReceivedEvent
                .map(async event => ({
                    date: event.timestamp || (await getBlock(event.blockNumber || event.blockHash)).timestamp * MILLISECONDS,
                    from: event.returnValues.from,
                    amount: prepBigNumber(event.returnValues.amount|| 0, paymentToken.decimals, true),
                    paid: true

                })));

            this.setState({
                paymentToken,
                shares: injectedAccountShares,
                released: injectedAccountReleased,
                principalDisbursed,
                totalPaid: _totalPaid,
                releaseAllowance: _releaseAllowance,
                withdrawals,
                repayments,
                repaymentManagerInstance
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const {paymentToken, principalDisbursed, shares, released, totalPaid, releaseAllowance, repayments, transacting, withdrawals} = this.state;
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
                                        <Col lg={2} md={2} sm={2} xs={2}>
                                            <h4>{!principalDisbursed ? "0" : prepBigNumber(principalDisbursed, paymentToken.decimals, true)} Dai</h4>
                                            <p>Loan Disbursed</p>
                                        </Col>
                                        <Col lg={2} md={2} sm={2} xs={2}>
                                            <h4>{!totalPaid ? "0" : prepBigNumber(totalPaid, paymentToken.decimals, true)} Dai</h4>
                                            <p>Loan Repaid</p>
                                        </Col>
                                        <Col lg={2} md={2} sm={2} xs={2}>
                                            <h4>{!shares ? "0" : prepBigNumber(shares, paymentToken.decimals, true)} Dai</h4>
                                            <p>Invested Amount</p>
                                        </Col>
                                        <Col lg={2} md={2} sm={2} xs={2}>
                                            <h4>{!totalPaid ? "0" : prepBigNumber(released, paymentToken.decimals, true)} Dai</h4>
                                            <p>Withdrawn</p>
                                        </Col>
                                        <Col lg={2} md={2} sm={2} xs={2}>
                                            <h4>{!releaseAllowance ? "0" : prepBigNumber(releaseAllowance, paymentToken.decimals, true)} Dai</h4>
                                            <p>Account Balance</p>
                                        </Col>
                                    </Row>
                                </Margin>
                            </Col>
                        </Row>
                    </Container>
                    <Margin bottom={48}>
                        <Withdrawal withdrawals={withdrawals} transacting={transacting} onWithdraw={this.onWithdraw}/>
                    </Margin>
                    <RepaymentStatus repayments={repayments}/>
                </MyLoanWrapper>
            </React.Fragment>
        );
    }
}

export default withRouter<MyLoanProps>(MyLoan);
