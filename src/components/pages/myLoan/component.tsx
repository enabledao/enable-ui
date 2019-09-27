import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { ChasingDots } from 'styled-spinkit'
import { Container, MainContainer } from '../../../styles/bases'
import { Margin } from '../../../styles/utils'
import { Button, Row, Col } from '../../lib'
import { HeroWrapper, HeroContent, BoxStats, HeroTitle } from './styled'
import BorrowerActions from './borrowerActions'
import Withdrawal from './withdrawals'
import RepaymentStatus from './repaymentStatus'
import contractAddresses from '../../../config/ines.fund.js'
import { LoanStatuses, MILLISECONDS, ZERO } from '../../../config/constants.js'
import PatternImage from '../../../images/pattern.png'
import {
    BN,
    getBlock,
    getInjectedAccountAddress,
    prepBigNumber,
} from '../../../utils/web3Utils'
import { getDeployedFromConfig } from '../../../utils/getDeployed'
import {
    allowance,
    getInstance,
    getTokenDetailsFromAddress,
} from '../../../utils/paymentToken'
import { availableWithdrawal } from '../../../utils/jsCalculator'
import { connectToWallet } from '../../../utils/web3Utils'

import {
    getBorrower,
    getLoanMetadataUrl,
    getPrincipalToken,
    getPrincipalRequested,
    getRepaymentCap,
    getCrowdfundEnd,
    getCrowdfundStart,
    amountContributed,
    totalContributed,
    principalWithdrawn,
    amountRepaid,
    repaymentWithdrawn,
    totalRepaymentWithdrawn,
    startCrowdfund,
    withdrawPrincipal,
    repay,
    withdrawRepayment,
    approveAndPay,
    WithdrawRepaymentEvent,
    RepayEvent,
} from '../../../utils/crowdloan'

import { fetchLoanMetadata, getLoanPeriod } from '../../../utils/metadata'

interface MyLoanState {
    injectedAccountAddress: string
    paymentToken: object
    principalDisbursed: string
    principalRequested: string
    releaseAllowance: string
    repayments: object
    crowdloanInstance: object
    transacting: boolean
    loanParams: object
    shares: string
    released: string
    totalPaid: string
    totalReleased: string
    totalShares: string
    withdrawals: object
    loaded: boolean
}

interface MyLoanProps extends RouteComponentProps<any> {}
class MyLoan extends React.Component<MyLoanProps, MyLoanState> {
    state = {
        injectedAccountAddress: null,
        paymentToken: null,
        principalDisbursed: '',
        principalRequested: '',
        shares: '',
        released: '',
        totalPaid: '',
        totalReleased: '',
        totalShares: '',
        repayments: null,
        crowdloanInstance: null,
        transacting: false,
        releaseAllowance: '',
        withdrawals: null,
        loaded: false,
        loanParams: {
            borrower: '',
            loanPeriod: '',
            crowdfundStart: '',
            crowdfundEnd: '',
            repaymentCap: '',
        },
    }

    onWithdraw = async () => {
        // const {history} = this.props;
        const { releaseAllowance, crowdloanInstance } = this.state

        if (!+releaseAllowance) {
            return console.error('No balance Available for Withdrawal')
        }
        try {
            this.setState({ transacting: true })

            const injectedAccountAddress = await getInjectedAccountAddress()
            const tx = await withdrawRepayment(
                crowdloanInstance,
                injectedAccountAddress
            )
            console.log(tx)

            this.setState({ transacting: false })
            return
        } catch (e) {
            this.setState({ transacting: false })
            return console.error(e)
        }
    }

    onstartcrowdfund = async () => {
        const { crowdloanInstance } = this.state

        try {
            this.setState({ transacting: true })

            const crowdfundStart = await getCrowdfundStart(crowdloanInstance)
            if (+crowdfundStart) {
                return console.error('Crowdfund already started')
            }

            const tx = await startCrowdfund(crowdloanInstance)
            console.log(tx)

            this.setState({ transacting: false })
            return
        } catch (e) {
            this.setState({ transacting: false })
            return console.error(e)
        }
    }
    onborrowerwithdraw = async () => {
        const { crowdloanInstance, paymentToken } = this.state

        try {
            this.setState({ transacting: true })

            const amount = window.prompt('How much do you want to withdraw?')
            if (!+amount) {
                return console.error('Withdrawal cancelled')
            }

            const tx = await withdrawPrincipal(
                crowdloanInstance,
                prepBigNumber(amount, paymentToken.decimals)
            )
            console.log(tx)

            this.setState({ transacting: false })
            return
        } catch (e) {
            this.setState({ transacting: false })
            return console.error(e)
        }
    }

    onrepay = async () => {
        const {
            crowdloanInstance,
            injectedAccountAddress,
            paymentToken,
        } = this.state

        try {
            this.setState({ transacting: true })

            const now = prepBigNumber(
                Math.floor(new Date().getTime() / MILLISECONDS),
                ZERO,
                true
            )

            const crowdfundEnd = await getCrowdfundEnd(crowdloanInstance)
            if (+crowdfundEnd >= +now) {
                return console.error('Repayment not yet active')
            }

            const amount = window.prompt('How much do you want to repay?')

            if (!+amount) {
                return console.error('Repayment cancelled')
            }

            const amountInERC20 = prepBigNumber(amount, paymentToken.decimals)

            const paymentTokenInstance = await getInstance(paymentToken.address)

            const approvedBalance = await allowance(
                paymentTokenInstance,
                injectedAccountAddress,
                crowdloanInstance.options.address
            )

            let tx
            if (BN(approvedBalance).lt(BN(amountInERC20))) {
                tx = await approveAndPay(
                    paymentTokenInstance,
                    crowdloanInstance,
                    amountInERC20
                )
            } else {
                tx = await repay(crowdloanInstance, amountInERC20)
            }

            console.log(tx)

            this.setState({ transacting: false })
            return
        } catch (e) {
            this.setState({ transacting: false })
            return console.error(e)
        }
    }

    componentDidMount = async () => {
        try {
            const crowdloanInstance = await getDeployedFromConfig(
                'Crowdloan',
                contractAddresses
            )

            const paymentToken = await getTokenDetailsFromAddress(
                await getPrincipalToken(crowdloanInstance)
            )

            const injectedAccountAddress = await getInjectedAccountAddress()

            const loanMetadataUrl = await getLoanMetadataUrl(crowdloanInstance)
            const loanMetadata = await fetchLoanMetadata(loanMetadataUrl)

            const loanPeriod = await getLoanPeriod(loanMetadata)

            // Contract Calls
            const borrower = await getBorrower(crowdloanInstance)

            // Note: principal disbursed and total paid will return zero when the loan is not started
            const principalDisbursed = await principalWithdrawn(
                crowdloanInstance
            )
            const principalRequested = await getPrincipalRequested(
                crowdloanInstance
            )

            const crowdfundStart = await getCrowdfundStart(crowdloanInstance)
            const crowdfundEnd = await getCrowdfundEnd(crowdloanInstance)
            const repaymentCap = await getRepaymentCap(crowdloanInstance)
            const _totalPaid = await amountRepaid(crowdloanInstance)

            const _totalShares = await totalContributed(crowdloanInstance)
            const _totalReleased = await totalRepaymentWithdrawn(
                crowdloanInstance
            )
            const injectedAccountShares = await amountContributed(
                crowdloanInstance,
                injectedAccountAddress
            )
            const injectedAccountReleased = await repaymentWithdrawn(
                crowdloanInstance,
                injectedAccountAddress
            )

            let _releaseAllowance
            if (+injectedAccountShares > 0) {
                _releaseAllowance = await availableWithdrawal(
                    injectedAccountShares,
                    _totalShares,
                    injectedAccountReleased
                )
            } else {
                _releaseAllowance = '0'
            }

            const withdrawals = await WithdrawRepaymentEvent(
                crowdloanInstance,
                {
                    fromBlock: 0,
                    toBlock: 'latest',
                    filter: { lender: injectedAccountAddress },
                }
            )

            const paymentReceivedEvent = await RepayEvent(crowdloanInstance, {
                fromBlock: 0,
                toBlock: 'latest',
            })

            const repayments = await Promise.all(
                paymentReceivedEvent.map(async event => ({
                    date:
                        event.timestamp ||
                        (await getBlock(event.blockNumber || event.blockHash))
                            .timestamp * MILLISECONDS,
                    from: event.returnValues.from,
                    amount: prepBigNumber(
                        event.returnValues.amount || 0,
                        paymentToken.decimals,
                        true
                    ),
                    paid: true,
                }))
            )

            this.setState({
                injectedAccountAddress,
                loanParams: {
                    borrower,
                    loanPeriod,
                    crowdfundStart,
                    crowdfundEnd,
                    repaymentCap,
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
                crowdloanInstance,
                loaded: true,
            })
        } catch (err) {
            console.log(err)
        }
    }

    loanStatus = () => {
        const {
            loanParams: { crowdfundStart, crowdfundEnd, repaymentCap },
            totalPaid,
            totalShares,
        } = this.state
        let loanStatus
        const now = prepBigNumber(
            Math.floor(new Date().getTime() / MILLISECONDS),
            ZERO,
            true
        )
        switch (true) {
            case +crowdfundStart === ZERO:
                loanStatus = LoanStatuses.NOT_STARTED
                break
            case +crowdfundStart > 0 && +now < +crowdfundEnd:
                loanStatus = LoanStatuses.FUNDING_STARTED
                break
            case +crowdfundEnd < now && +totalShares === ZERO:
                loanStatus = LoanStatuses.FUNDING_FAILED
                break
            case +crowdfundEnd < +now:
                loanStatus = LoanStatuses.REPAYMENT_CYCLE
                break
            case +totalPaid === +repaymentCap:
                loanStatus = LoanStatuses.REPAYMENT_COMPLETE
                break
        }
        return loanStatus
    }

    renderLenderLoan = (
        injectedAccountAddress,
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
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        left: 0,
                        transform: 'scaleX(-1)',
                    }}
                    src={PatternImage}
                    alt="pattern"
                />
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        right: 0,
                    }}
                    src={PatternImage}
                    alt="pattern"
                />
                {!injectedAccountAddress ? (
                    <HeroTitle>
                        <img
                            style={{
                                position: 'absolute',
                                top: 0,
                                height: '100%',
                                left: 0,
                                transform: 'scaleX(-1)',
                            }}
                            src={PatternImage}
                            alt="pattern"
                        />
                        <img
                            style={{
                                position: 'absolute',
                                top: 0,
                                height: '100%',
                                right: 0,
                            }}
                            src={PatternImage}
                            alt="pattern"
                        />
                        <Container>
                            <Margin vertical={48}>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <BoxStats>
                                            <Col lg={9} md={12}>
                                                <p>
                                                    Connecting your wallet to
                                                    see your investment
                                                </p>
                                            </Col>
                                            <Col lg={3} md={12}>
                                                <Button
                                                    color="green"
                                                    onClick={async () =>
                                                        await connectToWallet()
                                                    }
                                                >
                                                    Connect Wallet
                                                </Button>
                                            </Col>
                                        </BoxStats>
                                    </Col>
                                </Row>
                            </Margin>
                        </Container>
                    </HeroTitle>
                ) : (
                    <Container>
                        <Margin vertical={48}>
                            <Row>
                                <Col lg={4} md={4} sm={4} xs={4}>
                                    <BoxStats>
                                        <p>Account Balance</p>
                                        <h4>
                                            {!releaseAllowance
                                                ? '0'
                                                : prepBigNumber(
                                                      releaseAllowance,
                                                      paymentToken.decimals,
                                                      true
                                                  )}{' '}
                                            Dai
                                        </h4>
                                    </BoxStats>
                                </Col>
                                <Col lg={4} md={4} sm={4} xs={4}>
                                    <BoxStats>
                                        <p>Repaid</p>
                                        <h4>
                                            {!released
                                                ? '0'
                                                : prepBigNumber(
                                                      released,
                                                      paymentToken.decimals,
                                                      true
                                                  )}{' '}
                                            Dai
                                        </h4>
                                    </BoxStats>
                                </Col>
                                <Col lg={4} md={4} sm={4} xs={4}>
                                    <BoxStats>
                                        <p>Invested Amount</p>
                                        <h4>
                                            {!shares
                                                ? '0'
                                                : prepBigNumber(
                                                      shares,
                                                      paymentToken.decimals,
                                                      true
                                                  )}{' '}
                                            Dai
                                        </h4>
                                    </BoxStats>
                                </Col>
                            </Row>
                        </Margin>
                    </Container>
                )}
            </HeroTitle>
            <MainContainer>
                <div style={{ position: 'relative', top: -80 }}>
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
            </MainContainer>
        </HeroWrapper>
    )

    renderBorrowerLoan = (
        injectedAccountAddress,
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
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        left: 0,
                        transform: 'scaleX(-1)',
                    }}
                    src={PatternImage}
                    alt="pattern"
                />
                <img
                    style={{
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        right: 0,
                    }}
                    src={PatternImage}
                    alt="pattern"
                />
                {!injectedAccountAddress ? (
                    <HeroTitle>
                        <img
                            style={{
                                position: 'absolute',
                                top: 0,
                                height: '100%',
                                left: 0,
                                transform: 'scaleX(-1)',
                            }}
                            src={PatternImage}
                            alt="pattern"
                        />
                        <img
                            style={{
                                position: 'absolute',
                                top: 0,
                                height: '100%',
                                right: 0,
                            }}
                            src={PatternImage}
                            alt="pattern"
                        />
                        <Container>
                            <Margin vertical={48}>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <BoxStats>
                                            <Col lg={9} md={12}>
                                                <p>
                                                    Connecting your wallet to
                                                    see your investment
                                                </p>
                                            </Col>
                                            <Col lg={3} md={12}>
                                                <Button
                                                    color="green"
                                                    onClick={async () =>
                                                        await connectToWallet()
                                                    }
                                                >
                                                    Connect Wallet
                                                </Button>
                                            </Col>
                                        </BoxStats>
                                    </Col>
                                </Row>
                            </Margin>
                        </Container>
                    </HeroTitle>
                ) : (
                    <Container>
                        <Margin vertical={48}>
                            <Row>
                                <Col lg={6} md={12}>
                                    <BoxStats>
                                        <p>Amount raised</p>
                                        <h4>
                                            {!totalShares
                                                ? '0'
                                                : prepBigNumber(
                                                      totalShares,
                                                      paymentToken.decimals,
                                                      true
                                                  )}{' '}
                                            Dai
                                        </h4>
                                    </BoxStats>
                                </Col>
                                <Col lg={6} md={12}>
                                    <BoxStats>
                                        <p>Loan Disbursed</p>
                                        <h4>
                                            {!principalDisbursed
                                                ? '0'
                                                : prepBigNumber(
                                                      principalDisbursed,
                                                      paymentToken.decimals,
                                                      true
                                                  )}{' '}
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
                                                ? '0'
                                                : prepBigNumber(
                                                      totalPaid,
                                                      paymentToken.decimals,
                                                      true
                                                  )}{' '}
                                            Dai
                                        </h4>
                                    </BoxStats>
                                </Col>
                                <Col lg={6} md={12}>
                                    <BoxStats>
                                        <p>Amount withdrawn</p>
                                        <h4>
                                            {!totalReleased
                                                ? '0'
                                                : prepBigNumber(
                                                      totalReleased,
                                                      paymentToken.decimals,
                                                      true
                                                  )}{' '}
                                            Dai
                                        </h4>
                                    </BoxStats>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={12}>
                                    <BoxStats>
                                        <p>Status</p>
                                        <h4>{this.loanStatus()}</h4>
                                    </BoxStats>
                                </Col>
                            </Row>
                        </Margin>
                    </Container>
                )}
            </HeroTitle>
            <MainContainer>
                <div style={{ position: 'relative', top: -80 }}>
                    <Row>
                        <Col lg={6} md={12}>
                            <HeroContent>
                                <RepaymentStatus repayments={repayments} />
                            </HeroContent>
                        </Col>
                        <Col lg={6} md={12}>
                            <HeroContent>
                                <BorrowerActions
                                    loanStatus={this.loanStatus()}
                                    onborrowerwithdraw={this.onborrowerwithdraw}
                                    onrepay={this.onrepay}
                                    onstartcrowdfund={this.onstartcrowdfund}
                                />
                            </HeroContent>
                        </Col>
                    </Row>
                </div>
            </MainContainer>
        </HeroWrapper>
    )
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
            transacting,
        } = this.state
        const { borrower } = loanParams
        const isBorrower = injectedAccountAddress === borrower
        return (
            <React.Fragment>
                {this.state.loaded ? (
                    borrower &&
                    (isBorrower
                        ? this.renderBorrowerLoan(
                              injectedAccountAddress,
                              paymentToken,
                              principalDisbursed,
                              totalPaid,
                              totalReleased,
                              totalShares,
                              repayments
                          )
                        : this.renderLenderLoan(
                              injectedAccountAddress,
                              paymentToken,
                              shares,
                              released,
                              releaseAllowance,
                              transacting,
                              repayments,
                              withdrawals
                          ))
                ) : (
                    <ChasingDots />
                )}
            </React.Fragment>
        )
    }
}

export default withRouter<MyLoanProps>(MyLoan)
