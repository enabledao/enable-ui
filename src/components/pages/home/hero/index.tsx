import React from 'react'
import { ChasingDots } from 'styled-spinkit'
import YoutubeEmbed from '../../../lib/youtube'
import ModalListContributor from '../contributor/modalListContributor'
import ModalVideo from './modalVideo'
import { MainContainer } from '../../../../styles/bases'
import { Margin } from '../../../../styles/utils'
import { Row, Col, Progress, Button, ShowModal } from '../../../lib'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppPath } from '../../../../constant/appPath'
import { getDeployedFromConfig } from '../../../../utils/getDeployed'
import { prepBigNumber } from '../../../../utils/web3Utils'
import { getTokenDetailsFromAddress } from '../../../../utils/paymentToken'
import {
    totalContributed,
    getCrowdfundEnd,
    getPrincipalRequested,
    getPrincipalToken,
} from '../../../../utils/crowdloan'
import { formatBN } from '../../../../utils/formatters'
import {
    getMinimumRepayment,
    getRepaymentStart,
} from '../../../../utils/metadata'
import PatternImage from '../../../../images/pattern.png'
import contractAddresses from '../../../../config/ines.fund'
import {
    MILLISECONDS,
    MONTHS_IN_YEAR,
    ZERO,
} from '../../../../config/constants'

import {
    HeroWrapper,
    HeroCell,
    HeroButtonLendMobile,
    HeroLink,
    HeroStats,
    HeroImage,
    HeroVideo,
    HeroStatsRight,
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'

interface HomeHeroProps extends RouteComponentProps<any> {
    loanPeriod: string
    interestRate: string
    contributors: object[]
    loanMetadata: object
}

export interface HomeHeroState {
    showModal: boolean
    showModalVideo: boolean
    loanPeriod: string
    interestRate: string
    loanEndTimestamp: string
    repaymentStart: any
    minRepayment: any
    totalContributed: string
    principalRequested: string
    payees: string
    paymentToken: any
    loaded: boolean
}

class HomeHero extends React.Component<HomeHeroProps, HomeHeroState> {
    constructor(props: HomeHeroProps) {
        super(props)
        this.state = {
            showModal: false,
            showModalVideo: false,
            loanPeriod: null,
            interestRate: null,
            loanEndTimestamp: null,
            repaymentStart: null,
            minRepayment: null,
            totalContributed: null,
            principalRequested: null,
            payees: null,
            paymentToken: {},
            loaded: false,
        }
        this.handleModal = this.handleModal.bind(this)
        this.handleModalVideo = this.handleModalVideo.bind(this)
        this.handleLend = this.handleLend.bind(this)
    }

    componentDidMount = async () => {
        // Get the contract instances for Ines (We'll just bake these in for now).
        const crowdloanInstance = await getDeployedFromConfig(
            'Crowdloan',
            contractAddresses
        )
        const { loanMetadata } = this.props

        try {
            const minRepayment = await getMinimumRepayment(loanMetadata)
            const repaymentStart = await getRepaymentStart(loanMetadata)

            const principalRequested = await getPrincipalRequested(
                crowdloanInstance
            )
            const loanStartTimestamp = await getCrowdfundEnd(crowdloanInstance)
            const _totalContributed = await totalContributed(crowdloanInstance)
            const paymentToken = await getTokenDetailsFromAddress(
                await getPrincipalToken(crowdloanInstance)
            )

            let loanEndTimestamp

            if (+loanStartTimestamp !== ZERO) {
                const DAYINMILLISECONDS = 86400 * MILLISECONDS
                let endTimestamp = +(await getCrowdfundEnd(crowdloanInstance))
                endTimestamp = new Date(endTimestamp * MILLISECONDS).getTime()
                const now: any = new Date().getTime()

                loanEndTimestamp =
                    endTimestamp > now
                        ? Math.ceil((endTimestamp - now) / DAYINMILLISECONDS)
                        : null
            }

            this.setState({
                loanEndTimestamp: loanEndTimestamp || 0,
                repaymentStart: repaymentStart || 0,
                minRepayment: minRepayment.toString() || 0,
                totalContributed: _totalContributed || 0,
                principalRequested: principalRequested || 0,
                paymentToken,
                loaded: true,
            })
        } catch (err) {
            console.error(err)
        }
    }

    handleModal() {
        const { showModal, paymentToken } = this.state
        const { contributors } = this.props
        this.setState(
            {
                showModal: !showModal,
            },
            () =>
                ShowModal(
                    <ModalListContributor
                        contributors={contributors}
                        paymentToken={paymentToken}
                    />
                )
        )
    }

    handleModalVideo() {
        const { showModalVideo } = this.state
        this.setState(
            {
                showModalVideo: !showModalVideo,
            },
            () => ShowModal(<ModalVideo />)
        )
    }

    handleLend() {
        const { history } = this.props
        history.push(AppPath.checkout)
    }

    render() {
        const { contributors } = this.props
        return (
            <HeroWrapper>
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
                <MainContainer>
                    <HeroCell>
                        <Row>
                            <Col lg={7} md={12} sm={12} text="center">
                                <HeroImage>
                                    <HeroLink>
                                        <HeroVideo>
                                            <YoutubeEmbed youtubeId="s7oGAs4AkJg" />
                                        </HeroVideo>
                                    </HeroLink>
                                </HeroImage>
                            </Col>
                            <Col lg={5} md={12} sm={12}>
                                <b>
                                    <p style={{ color: '#6c6d7a' }}>
                                        INCOME SHARE AGREEMENT // EDUCATION
                                    </p>
                                </b>
                                <h2>
                                    Help me raise 60,000 Dai to attend Cornell
                                    University
                                </h2>
                                {this.state.loaded ? (
                                    <Margin top={32}>
                                        <HeroStats>
                                            <h5>
                                                {!this.state.totalContributed
                                                    ? '0'
                                                    : formatBN(
                                                          prepBigNumber(
                                                              this.state
                                                                  .totalContributed,
                                                              this.state
                                                                  .paymentToken
                                                                  .decimals,
                                                              true
                                                          )
                                                      )}
                                                {' Dai '}
                                                <small>
                                                    of&nbsp;
                                                    {!this.state
                                                        .principalRequested
                                                        ? '0'
                                                        : formatBN(
                                                              prepBigNumber(
                                                                  this.state
                                                                      .principalRequested,
                                                                  this.state
                                                                      .paymentToken
                                                                      .decimals,
                                                                  true
                                                              )
                                                          )}{' '}
                                                    goal
                                                </small>
                                            </h5>
                                        </HeroStats>
                                        <HeroStatsRight>
                                            <p>1 Dai = 1 USD</p>
                                        </HeroStatsRight>
                                    </Margin>
                                ) : (
                                    <Margin top={32}>
                                        <ChasingDots />
                                    </Margin>
                                )}
                                {this.state.loaded && (
                                    <div>
                                        <Margin vertical={8}>
                                            {!this.state.totalContributed ||
                                            !this.state.principalRequested ? (
                                                <Progress current={0} />
                                            ) : (
                                                <Progress
                                                    current={
                                                        (+prepBigNumber(
                                                            this.state
                                                                .totalContributed,
                                                            this.state
                                                                .paymentToken
                                                                .decimals,
                                                            true
                                                        ) *
                                                            100) /
                                                        +prepBigNumber(
                                                            this.state
                                                                .principalRequested,
                                                            this.state
                                                                .paymentToken
                                                                .decimals,
                                                            true
                                                        )
                                                    }
                                                />
                                            )}
                                        </Margin>
                                        <Margin top={8}>
                                            <HeroStats>
                                                <HeroLink
                                                    onClick={this.handleModal}
                                                >
                                                    Powered by
                                                    <b>
                                                        {' '}
                                                        {!contributors
                                                            ? '0'
                                                            : contributors.length}{' '}
                                                    </b>
                                                    contributors
                                                </HeroLink>
                                            </HeroStats>
                                            <HeroStatsRight>
                                                <p style={{ color: 'black' }}>
                                                    <b>
                                                        {!this.state
                                                            .loanEndTimestamp
                                                            ? '0'
                                                            : this.state
                                                                  .loanEndTimestamp}{' '}
                                                    </b>
                                                    <small>Days left</small>
                                                </p>
                                            </HeroStatsRight>
                                        </Margin>
                                    </div>
                                )}
                                <Margin top={24}>
                                    {this.state.loaded && (
                                        <Row>
                                            <Col lg={2} sm={6}>
                                                <HeroStats
                                                    data-for="isa-tooltip"
                                                    data-tip="Income Share Agreement (ISA) will be <br> distributed proportionally <br> by the amount of investment"
                                                    data-multiline="true"
                                                >
                                                    <h4>
                                                        {!this.props
                                                            .interestRate
                                                            ? '0'
                                                            : this.props
                                                                  .interestRate}
                                                        %
                                                    </h4>
                                                    <p>
                                                        ISA{' '}
                                                        <FontAwesomeIcon
                                                            icon={faInfoCircle}
                                                        />
                                                    </p>
                                                </HeroStats>
                                                <ReactTooltip id="isa-tooltip" />
                                            </Col>
                                            <Col lg={3} sm={6}>
                                                <HeroStats>
                                                    <h4>
                                                        {!this.props.loanPeriod
                                                            ? '0'
                                                            : Math.ceil(
                                                                  +this.props
                                                                      .loanPeriod /
                                                                      MONTHS_IN_YEAR
                                                              )}{' '}
                                                        yr.
                                                    </h4>
                                                    <p>Duration</p>
                                                </HeroStats>
                                            </Col>
                                            <Col lg={4} sm={6}>
                                                <HeroStats
                                                    data-for="minRepayment-tooltip"
                                                    data-tip="The minimum amount the borrower <br> is committed to repay <br> regardless of income"
                                                    data-multiline="true"
                                                >
                                                    <h4>
                                                        {!this.state
                                                            .minRepayment
                                                            ? '0'
                                                            : formatBN(
                                                                  prepBigNumber(
                                                                      this.state
                                                                          .minRepayment,
                                                                      this.state
                                                                          .paymentToken
                                                                          .decimals,
                                                                      true
                                                                  )
                                                              )}{' '}
                                                        Dai
                                                    </h4>
                                                    <p>
                                                        Min Repayment{' '}
                                                        <FontAwesomeIcon
                                                            icon={faInfoCircle}
                                                        />
                                                    </p>
                                                </HeroStats>
                                                <ReactTooltip id="minRepayment-tooltip" />
                                            </Col>
                                            <Col lg={3} sm={6}>
                                                <HeroStats>
                                                    <h4>
                                                        {!this.state
                                                            .minRepayment
                                                            ? '0'
                                                            : new Date(
                                                                  this.state
                                                                      .repaymentStart *
                                                                      MILLISECONDS
                                                              ).getFullYear()}
                                                    </h4>
                                                    <p>ISA Start</p>
                                                </HeroStats>
                                            </Col>
                                        </Row>
                                    )}
                                    <p style={{ color: '#6c6d7a' }}>
                                        <small>
                                            Income Share Agreement (ISA) is
                                            monthly percentage of
                                            post-graduation income that will be
                                            shared to investors proportionally
                                            by the amount of contribution within
                                            the duration or until cap is reached
                                        </small>
                                    </p>
                                </Margin>
                                <Margin top={16}>
                                    <Row>
                                        <Col lg={6} md={12} sm={12}>
                                            <Button
                                                color="green"
                                                onClick={this.handleLend}
                                            >
                                                Invest Now
                                            </Button>
                                        </Col>
                                        <Col lg={6} md={12} sm={12}>
                                            <Button
                                                color="green"
                                                outline
                                                onClick={() =>
                                                    window.open(
                                                        'https://calendly.com/inesfund/video-interview'
                                                    )
                                                }
                                            >
                                                Video Interview
                                            </Button>
                                        </Col>
                                    </Row>
                                </Margin>
                                <HeroButtonLendMobile>
                                    <Button
                                        color="green"
                                        onClick={this.handleLend}
                                    >
                                        Invest Now
                                    </Button>
                                </HeroButtonLendMobile>
                            </Col>
                        </Row>
                    </HeroCell>
                </MainContainer>
            </HeroWrapper>
        )
    }
}

export default withRouter<HomeHeroProps>(HomeHero)
