import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Container } from "../../../styles/bases";
import { Margin } from "../../../styles/utils";
import { Row, Col } from "../../lib";
import { HeroWrapper, HeroContent, BoxStats, HeroTitle } from "./styled";
import Withdrawal from "./withdrawals";
import RepaymentStatus from "./repaymentStatus";
import contractAddresses from "../../../config/ines.fund.js";
import { MILLISECONDS } from "../../../config/constants.js";
import PatternImage from "../../../images/pattern.png";
import {
  getBlock,
  getInjectedAccountAddress,
  prepBigNumber
} from "../../../utils/web3Utils";
import {
  getLoanParams,
  getPrincipalRequested
} from "../../../utils/termsContract";
import { getDeployedFromConfig } from "../../../utils/getDeployed";
import { getTokenDetailsFromAddress } from "../../../utils/paymentToken";
import {
  shares,
  release,
  released,
  releaseAllowance,
  totalPaid,
  totalReleased,
  totalShares,
  PaymentReceivedEvent,
  PaymentReleasedEvent
} from "../../../utils/repaymentManager";
import {
  getPrincipalDisbursed,
  getPrincipalToken
} from "../../../utils/termsContract";

interface MyLoanState {
  injectedAccountAddress: string;
  paymentToken: object;
  principalDisbursed: string;
  principalRequested: string;
  releaseAllowance: string;
  repayments: object;
  repaymentManagerInstance: object;
  transacting: boolean;
  loanParams: object;
  shares: string;
  released: string;
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
        released: "",
        totalPaid: "",
        totalReleased: "",
        totalShares: "",
        repayments: null,
        repaymentManagerInstance: null,
        transacting: false,
        releaseAllowance: "",
        withdrawals: null,
        loanParams: {
            borrower: "",
            interestRate: 0,
            loanPeriod: "",
            loanStatus: ""
        }
    };

    onWithdraw = async () => {
        // const {history} = this.props;
        const { releaseAllowance, repaymentManagerInstance } = this.state;

        if (!+releaseAllowance) {
            return console.error("No balance Available for Withdrawal");
        }
        try {
            this.setState({ transacting: true });

            const injectedAccountAddress = await getInjectedAccountAddress();
            const tx = await release(
                repaymentManagerInstance,
                injectedAccountAddress
            );
            console.log(tx);

            this.setState({ transacting: false });
            return;
        } catch (e) {
            this.setState({ transacting: false });
            return console.error(e);
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
            const loanParams = await getLoanParams(termsContractInstance);
            const {0: borrower} = loanParams;
            const {interestRate, loanPeriod, loanStatus: _loanStatus} = loanParams;

            // Note: principal disbursed and total paid will return zero when the loan is not started
            const principalDisbursed = await getPrincipalDisbursed(
                termsContractInstance
            );
            const principalRequested = await getPrincipalRequested(
                termsContractInstance
            );

            // Repayment Manager calls
            const _totalPaid = await totalPaid(repaymentManagerInstance);

            const _totalShares = await totalShares(repaymentManagerInstance);
            const _totalReleased = await totalReleased(repaymentManagerInstance);
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
                {
                fromBlock: 0,
                toBlock: "latest",
                filter: { to: injectedAccountAddress }
                }
            );

            // To do (Dennis): Need to investigate the return value
            const withdrawals = paymentReleasedEvents
            .map(event => event.returnValues)
            .filter(event => event.to === injectedAccountAddress);

            const paymentReceivedEvent = await PaymentReceivedEvent(
            repaymentManagerInstance,
            {
                fromBlock: 0,
                toBlock: "latest"
            });

            const repayments = await Promise.all(
                paymentReceivedEvent.map(async event => ({
                    date:
                        event.timestamp ||
                        (await getBlock(event.blockNumber || event.blockHash)).timestamp *
                        MILLISECONDS,
                    from: event.returnValues.from,
                    amount: prepBigNumber(
                        event.returnValues.amount || 0,
                        paymentToken.decimals,
                        true
                    ),
                    paid: true
                }))
            );

            this.setState({
                injectedAccountAddress,
                loanParams: {
                    borrower,
                    interestRate,
                    loanPeriod,
                    loanStatus: _loanStatus
                },
                paymentToken,
                principalDisbursed,
                principalRequested,
                shares: injectedAccountShares,
                released: injectedAccountReleased,
                totalPaid: _totalPaid,
                totalReleased: _totalReleased,
                totalShares: _totalShares,
                releaseAllowance: _releaseAllowance,
                withdrawals,
                repayments,
                repaymentManagerInstance
            });
        } catch (err) {
            console.log(err);
        }
    }

    loanStatus = loanStatusNumber => {
        let loanStatus;
        switch (+loanStatusNumber) {
            case 0:
                loanStatus = "Not Funding";
                break;
            case 1:
                loanStatus = "Funding Started";
                break;
            case 2:
                loanStatus = "Funding Failed";
                break;
            case 3:
                loanStatus = "Funding Complete";
                break;
            case 4:
                loanStatus = "Repayment Cycle";
                break;
            case 5:
                loanStatus = "Repayment Complete";
                break;
        }
        return loanStatus;
    };

    renderLenderLoan = (
        paymentToken,
        shares,
        released,
        releaseAllowance,
        transacting,
        repayments,
        withdrawals
    ) => (
        <HeroWrapper>
            <HeroTitle>
                <img
                style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    left: 0,
                    transform: "scaleX(-1)"
                }}
                src={PatternImage}
                alt="pattern"
                />
                <img
                style={{ position: "absolute", top: 0, height: "100%", right: 0 }}
                src={PatternImage}
                alt="pattern"
                />
                <Container>
                    <Margin vertical={48}>
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <BoxStats>
                                    <p>Account Balance</p>
                                    <h4>
                                        {!releaseAllowance
                                            ? "0"
                                            : prepBigNumber(
                                                    releaseAllowance,
                                                    paymentToken.decimals,
                                                    true
                                                )}{" "}
                                        Dai
                                    </h4>
                                </BoxStats>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <BoxStats>
                                    <p>Repaid</p>
                                    <h4>
                                        {!released
                                            ? "0"
                                            : prepBigNumber(released, paymentToken.decimals, true)}{" "}
                                        Dai
                                    </h4>
                                </BoxStats>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <BoxStats>
                                    <p>Invested Amount</p>
                                    <h4>
                                        {!shares
                                            ? "0"
                                            : prepBigNumber(shares, paymentToken.decimals, true)}{" "}
                                        Dai
                                    </h4>
                                </BoxStats>
                            </Col>
                        </Row>
                    </Margin>
                </Container>
            </HeroTitle>
            <Container>
                <div style={{ position: "relative", top: -80 }}>
                <Row>
                    <Col lg={6} md={12}>
                    <HeroContent>
                        <Withdrawal
                        withdrawals={withdrawals}
                        transacting={transacting}
                        onWithdraw={this.onWithdraw}
                        />
                    </HeroContent>
                    </Col>
                    <Col lg={6} md={12}>
                    <HeroContent>
                        <RepaymentStatus repayments={repayments} />
                    </HeroContent>
                    </Col>
                </Row>
                </div>
            </Container>
        </HeroWrapper>
    );

    renderBorrowerLoan = (
        loanStatus,
        paymentToken,
        principalDisbursed,
        totalPaid,
        totalReleased,
        totalShares,
        repayments
    ) => (
        <HeroWrapper>
            <HeroTitle>
                <img
                style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    left: 0,
                    transform: "scaleX(-1)"
                }}
                src={PatternImage}
                alt="pattern"
                />
                <img
                style={{ position: "absolute", top: 0, height: "100%", right: 0 }}
                src={PatternImage}
                alt="pattern"
                />
                <Container>
                    <Margin vertical={48}>
                        <Row>
                            <Col lg={6} md={12}>
                                <BoxStats>
                                    <p>Amount raised</p>
                                    <h4>
                                    {!totalShares
                                        ? "0"
                                        : prepBigNumber(totalShares, paymentToken.decimals, true)}{" "}
                                    Dai
                                    </h4>
                                </BoxStats>
                            </Col>
                            <Col lg={6} md={12}>
                                <BoxStats>
                                    <p>Loan Disbursed</p>
                                    <h4>
                                    {!principalDisbursed
                                        ? "0"
                                        : prepBigNumber(
                                            principalDisbursed,
                                            paymentToken.decimals,
                                            true
                                        )}{" "}
                                    Dai
                                    </h4>
                                </BoxStats>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12}>
                                <BoxStats>
                                    <p>Amount Repaid</p>
                                    <h4>
                                    {!totalPaid
                                        ? "0"
                                        : prepBigNumber(totalPaid, paymentToken.decimals, true)}{" "}
                                    Dai
                                    </h4>
                                </BoxStats>
                            </Col>
                            <Col lg={6} md={12}>
                                <BoxStats>
                                    <p>Amount withdrawn</p>
                                    <h4>
                                    {!totalReleased
                                        ? "0"
                                        : prepBigNumber(
                                            totalReleased,
                                            paymentToken.decimals,
                                            true
                                        )}{" "}
                                    Dai
                                    </h4>
                                </BoxStats>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={12}>
                                <BoxStats>
                                    <p>Status</p>
                                    <h4>
                                        {this.loanStatus(loanStatus)}
                                    </h4>
                                </BoxStats>
                            </Col>
                        </Row>
                    </Margin>
                </Container>
            </HeroTitle>
            <Container>
                <div style={{ position: "relative", top: -80 }}>
                    <Row>
                        <Col lg={6} md={12}>
                            <HeroContent>
                                <RepaymentStatus repayments={repayments} />
                            </HeroContent>
                        </Col>
                    </Row>
                </div>
            </Container>
        </HeroWrapper>
    );
    render() {
        const {
            injectedAccountAddress,
            loanParams,
            paymentToken,
            principalDisbursed,
            releaseAllowance,
            shares,
            released,
            totalPaid,
            totalReleased,
            totalShares,
            withdrawals,
            repayments,
            transacting
        } = this.state;
        const {borrower, loanStatus} = loanParams;
        const isBorrower = injectedAccountAddress === borrower;

        return (
            <React.Fragment>
                {borrower &&
                    (isBorrower
                        ? this.renderBorrowerLoan(
                              loanStatus,
                              paymentToken,
                              principalDisbursed,
                              totalPaid,
                              totalReleased,
                              totalShares,
                              repayments
                          )
                        : this.renderLenderLoan(
                              paymentToken,
                              shares,
                              released,
                              releaseAllowance,
                              transacting,
                              repayments,
                              withdrawals
                          ))}
            </React.Fragment>
        );
    }
}

export default withRouter<MyLoanProps>(MyLoan);
