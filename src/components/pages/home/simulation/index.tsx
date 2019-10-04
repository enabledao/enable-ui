import React from 'react'
import { TextField, Row, Col, Button } from '../../../lib'
import { Margin, Padding } from '../../../../styles/utils'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import ProfileHover from 'profile-hover'
import CornellLogo from '../../../../images/cornell.png'
import BloomLogo from '../../../../images/bloomLogo.png'
import BoxLogo from '../../../../images/3boxLogo.png'
import InesSquare from '../../../../images/inesSquare.png'
import { AppPath } from '../../../../constant/appPath'
import {
    SliderInput,
    SliderMinMax,
    ButtonLendSimulation,
    SimulationWrapper,
    SocialContent,
    SocialAvatar,
    IdentityBox,
    ProfileSocialLink,
} from './styled'
import AvatarBrahma from '../../../../images/avatar/brahma.jpg'
import Linkedin from '../../../../images/socialMedia/linkedin.svg'
import Instagram from '../../../../images/socialMedia/instagram.svg'
import Twitter from '../../../../images/socialMedia/twitter.svg'
import Facebook from '../../../../images/socialMedia/facebook.svg'
import { prepBigNumber } from '../../../../utils/web3Utils'
import { formatBN } from '../../../../utils/formatters'
import { simulateReturns } from '../../../../utils/jsCalculator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'

interface SimuLationReturnProps extends RouteComponentProps<any> {
    contributors?: any
    expectedSalary?: any
    paymentToken: any
    simulateInterest: (contribution: string | number, salary?: string) => any
}

export interface SimuLationReturnState {
    textfieldShow: boolean
    investmentAmount: number
    salary: number
    simulated: any
    salaryMin: number
    salaryMax: number
    showModal: boolean
    showModalGuarantor: boolean
}

class SimuLationReturn extends React.Component<
    SimuLationReturnProps,
    SimuLationReturnState
> {
    constructor(props: any) {
        super(props)
        this.state = {
            textfieldShow: false,
            investmentAmount: 10000,
            salary: 86320,
            salaryMin: 30000,
            salaryMax: 150000,
            showModal: false,
            showModalGuarantor: false,
            simulated: null,
        }
    }

    handleLend = () => {
        const { history } = this.props
        history.push(AppPath.LoanPersonalInfo)
    }

    handleChangeSalary = e => {
        this.setState({
            salary: Number(e.target.value),
        })
    }

    handleChangeInvestmentAmount = e => {
        this.setState({
            investmentAmount: Number(e.target.value),
        })
    }

    getSimulated = () => {
        return this.props.simulateInterest(
            prepBigNumber(
                this.state.investmentAmount,
                this.props.paymentToken.decimals
            )
        )
    }

    render() {
        const { investmentAmount, salaryMin, salaryMax, salary } = this.state
        const {
            minRepayment,
            maxRepayment,
            incomeSharePercentage,
            expectedTotalReturn,
            simulatedMonthlyRepayment,
        } = simulateReturns(investmentAmount, salary)

        return (
            <React.Fragment>
                <Margin top={20} bottom={60}>
                    <IdentityBox>
                        <Row>
                            <Col lg={6}>
                                <h5>Identity</h5>
                            </Col>

                            <Col lg={6} text="right">
                                <img src={BoxLogo} alt="3DBox - logo" />
                            </Col>
                        </Row>
                        <div style={{ position: 'absolute' }}>
                            <img src={InesSquare} alt="Ines - Square" />
                        </div>
                        <Padding left={124}>
                            <h5>Widya Imanesti</h5>
                            <p>Jakarta - Indonesia</p>
                            <Margin top={16}>
                                <ProfileSocialLink
                                    href="https://id.linkedin.com/in/widya-imanesti"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Linkedin}
                                        alt="Socila - Media"
                                        width={20}
                                    />
                                </ProfileSocialLink>
                                <ProfileSocialLink
                                    href="https://www.instagram.com/wimanesti/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Instagram}
                                        alt="Socila - Media"
                                        width={20}
                                    />
                                </ProfileSocialLink>
                                <ProfileSocialLink
                                    href="https://twitter.com/itsenamiw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Twitter}
                                        alt="Socila - Media"
                                        width={20}
                                    />
                                </ProfileSocialLink>
                                <ProfileSocialLink
                                    href="https://www.facebook.com/widya.imanesti"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Facebook}
                                        alt="Socila - Media"
                                        width={20}
                                    />
                                </ProfileSocialLink>
                            </Margin>
                        </Padding>
                        <ProfileHover
                            noTheme
                            orientation={'top'}
                            address={
                                '0xf585e6B4173914A296c9b3AFa83f86bfaF4240f6'
                            }
                        >
                            <Margin top={24}>
                                <div
                                    style={{
                                        backgroundColor: '#f7f7f7',
                                        padding: 16,
                                        marginTop: 24,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <b>
                                        <small>ETH Wallet Key</small>
                                    </b>

                                    <small>
                                        <p>
                                            0xf585e6B4173914A296c9b3AFa83f86bfaF4240f6
                                        </p>
                                    </small>
                                </div>
                            </Margin>
                        </ProfileHover>
                        <Margin top={24}>
                            <h6 style={{ color: '#21b549', cursor: 'pointer' }}>
                                Admission Proof Document
                            </h6>
                        </Margin>
                    </IdentityBox>
                </Margin>
                <Margin top={40}>
                    <h5>Social Credits</h5>
                    <p>Attested by 2 guarantors</p>
                </Margin>
                <Margin top={8}>
                    <SocialContent>
                        <SocialAvatar>
                            <img src={AvatarBrahma} alt="Avatar - User" />
                        </SocialAvatar>
                        <Padding left={56}>
                            <div style={{ display: 'inline-block' }}>
                                <h6>Brahma Adhiyasa</h6>
                                <small>Colleague</small>
                            </div>
                            <p style={{ float: 'right' }}>
                                <img src={BloomLogo} alt="Bloom - logo" />
                            </p>
                        </Padding>
                    </SocialContent>
                </Margin>
                <Margin top={8}>
                    <SocialContent>
                        <SocialAvatar>
                            <img src={AvatarBrahma} alt="Daniel Onggunhao" />
                        </SocialAvatar>
                        <Padding left={56}>
                            <div style={{ display: 'inline-block' }}>
                                <h6>Daniel Onggunhao</h6>
                                <small>Colleague</small>
                            </div>
                            <p style={{ float: 'right' }}>
                                <img src={BloomLogo} alt="Bloom - logo" />
                            </p>
                        </Padding>
                    </SocialContent>
                </Margin>
                <Margin top={40}>
                    <h5>Simulate Returns</h5>
                </Margin>
                <SimulationWrapper>
                    <Margin>
                        <Margin top={8}>
                            <h6>Investment Amount</h6>
                            <TextField
                                type="number"
                                placeholder="e.g. 5,000"
                                value={
                                    investmentAmount === 0
                                        ? ''
                                        : investmentAmount
                                }
                                onChange={this.handleChangeInvestmentAmount}
                            />
                        </Margin>
                        <Margin top={10}>
                            <p style={{ display: 'inline-block' }}>
                                Repayment Floor
                            </p>
                            <p style={{ float: 'right' }}>
                                <b>{minRepayment} Dai</b>
                            </p>
                        </Margin>
                        <Margin bottom={8}>
                            <p style={{ display: 'inline-block' }}>
                                Repayment Ceiling
                            </p>
                            <p style={{ float: 'right' }}>
                                <b>{maxRepayment} Dai</b>
                            </p>
                        </Margin>
                    </Margin>
                    <hr />
                    <Margin top={18}>
                        <h6>Simulate Salary</h6>
                        <Margin top={10}>
                            <p style={{ display: 'inline-block' }}>
                                Average Annual Salary
                            </p>
                            <p style={{ float: 'right' }}>
                                ${formatBN(salary.toString())}
                            </p>
                        </Margin>
                        <Margin top={20}>
                            <SliderInput
                                type="range"
                                min={salaryMin}
                                max={salaryMax}
                                value={salary}
                                onChange={this.handleChangeSalary}
                            />
                            <SliderMinMax>
                                <p>Below Average</p>
                                <p>Above Average</p>
                            </SliderMinMax>
                        </Margin>
                        <Margin top={14} bottom={24}>
                            <div style={{ position: 'absolute' }}>
                                <img src={CornellLogo} alt="cornell - logo" />
                            </div>
                            <Padding left={80}>
                                <small>
                                    Based on{' '}
                                    <a
                                        href="https://www.ilr.cornell.edu/sites/default/files/ILR_CS_MastersDataBrochure2018%20Final_0.pdf
"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        reported 2018 median salary of $86,320{' '}
                                    </a>{' '}
                                    of graduates of Cornell University ILR
                                    program
                                </small>
                            </Padding>
                        </Margin>
                    </Margin>
                    <hr />
                    <Margin top={18}>
                        <p
                            data-for="income-ownership-tooltip"
                            data-tip="This represents % of borrower's future income"
                            style={{ display: 'inline-block' }}
                        >
                            Income Ownership{' '}
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </p>
                        <ReactTooltip id="income-ownership-tooltip" />
                        <p style={{ float: 'right' }}>
                            <b>{incomeSharePercentage}%</b> of 18%
                        </p>
                    </Margin>
                    <Margin>
                        <p style={{ display: 'inline-block' }}>
                            Simulated Monthly Payment
                        </p>
                        <p style={{ float: 'right' }}>
                            {simulatedMonthlyRepayment} Dai
                        </p>
                    </Margin>
                    <Margin>
                        <p style={{ display: 'inline-block' }}>Duration</p>
                        <p style={{ float: 'right' }}>6 years</p>
                    </Margin>

                    <Margin vertical={24}>
                        <h4>
                            {expectedTotalReturn}
                            &nbsp;<small>Dai</small>
                        </h4>
                        <small>Expected Total Return</small>
                    </Margin>
                    <ButtonLendSimulation>
                        <Margin vertical={24}>
                            <Button color="green" onClick={this.handleLend}>
                                Invest Now
                            </Button>
                        </Margin>
                    </ButtonLendSimulation>
                    {/* </Col>
                    </Row> */}
                </SimulationWrapper>
                <Margin vertical={40}>
                    <h5>Company Sponsorships</h5>
                </Margin>
                <Margin vertical={24}>
                    <SimulationWrapper>
                        <h5>Gold Tier</h5>
                        <h6>Lend 30,000 Dai or more</h6>
                        <p>
                            I will be your Campus Ambassador at Cornell, and
                            promote your company, help with event preparations
                            and publicity
                        </p>
                        <Margin top={40} bottom={30}>
                            <h6 style={{ color: '#21b549', cursor: 'pointer' }}>
                                Expected Repayment Calculator
                            </h6>
                            <h5>
                                38,000??? Dai&nbsp;
                                <small>&nbsp;(Expected Salary)</small>
                            </h5>
                        </Margin>
                        <Button
                            color="green"
                            outline
                            onClick={() =>
                                window.open(
                                    'https://calendly.com/inesfund/video-interview'
                                )
                            }
                        >
                            Schedule Video Interview
                        </Button>
                    </SimulationWrapper>
                </Margin>
                <Margin vertical={24}>
                    <SimulationWrapper>
                        <h5>Silver Tier</h5>
                        <h6>Lend 5,000 Dai or more</h6>
                        <p>
                            I will put your company's stickers on my laptop, as
                            well as my graduation robe in 2 years time
                        </p>
                        <Margin top={40} bottom={30}>
                            <h6 style={{ color: '#21b549', cursor: 'pointer' }}>
                                Expected Repayment Calculator
                            </h6>
                            <h5>
                                6,000??? Dai&nbsp;
                                <small>&nbsp;(Expected Salary)</small>
                            </h5>
                        </Margin>
                        <Button
                            color="green"
                            outline
                            onClick={() =>
                                window.open(
                                    'https://calendly.com/inesfund/video-interview'
                                )
                            }
                        >
                            Schedule Video Interview
                        </Button>
                    </SimulationWrapper>
                </Margin>
                <Margin vertical={40}>
                    <h5>Contributors</h5>
                    <p>Highest contributors to date</p>
                </Margin>
                <Margin top={40} bottom={24}>
                    <Row>
                        {
                            // To Do (Dennis): Missing the name of the contributor and the date of contribution
                        }
                        {this.props.contributors &&
                            this.props.contributors.map(contributor => (
                                <React.Fragment key={contributor.address}>
                                    <Col lg={6}>
                                        <h6>Anonymous</h6>
                                        <small>
                                            <p
                                                style={{
                                                    backgroundColor: '#f7f7f7',
                                                    padding: 8,
                                                    display: 'inline-block',
                                                }}
                                            >
                                                {contributor.address.replace(
                                                    contributor.address.substring(
                                                        10,
                                                        30
                                                    ),
                                                    '.....'
                                                )}
                                            </p>
                                        </small>
                                    </Col>
                                    <Col lg={6} text="right">
                                        <h6>
                                            <b>
                                                {prepBigNumber(
                                                    contributor.amount || 0,
                                                    this.props.paymentToken
                                                        .decimals,
                                                    true
                                                )}
                                            </b>{' '}
                                            Dai
                                        </h6>
                                        <small>
                                            <p>12 Days ago</p>
                                        </small>
                                    </Col>
                                    <Margin vertical={50} />
                                </React.Fragment>
                            ))}
                    </Row>
                </Margin>
            </React.Fragment>
        )
    }
}

export default withRouter<SimuLationReturnProps>(SimuLationReturn)
