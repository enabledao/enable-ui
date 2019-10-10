import React from 'react'
import axios from 'axios'
import { Form, Field } from 'react-final-form'
import { Margin, Padding } from '../../../../styles/utils'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppPath } from '../../../../constant/appPath'
import PatternImage from '../../../../images/pattern.png'
import { connect } from 'react-redux'
import {
    Spinner,
    Row,
    Col,
    TextField,
    Checkbox,
    Button,
    FieldError,
    RowButton,
} from '../../../lib'
import {
    CheckoutWrapper,
    HeroCell,
    HeroWrapper,
    CheckoutContainer,
} from '../styled'
import {
    requiredField,
    emailFormat,
    composeValidators,
    requiredChecked,
} from '../../../../constant/validation'
import createDecorator from 'final-form-focus'
import { withNavbarAndFooter } from '../../../hoc'
import IncomeShareCalculator from '../../../financial/incomeShareCalculator'
import { INES_FUND_POST_URL } from '../../../../config/isaConstants'

/**
 * Invest functionality
 */
import {
    approveAndFund,
    fund,
    getPrincipalToken,
    getPrincipalRequested,
    getCrowdfundStart,
    getCrowdfundEnd,
    getLoanMetadataUrl,
} from '../../../../utils/crowdloan'
import {
    fetchLoanMetadata,
    getExpectedSalary,
    getIncomeSharePercentage,
    getLoanPeriod,
} from '../../../../utils/metadata'
import contractAddresses from '../../../../config/ines.fund'
import {
    BN,
    getInjectedAccountAddress,
    prepBigNumber,
} from '../../../../utils/web3Utils'
import { getDeployedFromConfig } from '../../../../utils/getDeployed'
import {
    allowance,
    getInstance,
    getTokenDetailsFromAddress,
} from '../../../../utils/paymentToken'
import { MILLISECONDS, ZERO } from '../../../../config/constants'

interface CheckoutProps extends RouteComponentProps<any> {
    networkId: number
}

interface CheckoutState {
    transacting: boolean
    investmentAmount: number
    crowdloanInstance: any
    loanParams: any
    paymentToken: any
}

const focusOnErrors = createDecorator()

class Checkout extends React.Component<CheckoutProps, CheckoutState> {
    constructor(props: CheckoutProps) {
        super(props)
        this.state = {
            transacting: false,
            investmentAmount: 1000,
            crowdloanInstance: null,
            loanParams: {
                incomeSharePercentage: 0,
                loanPeriod: 0,
                principalRequested: 0,
                expectedSalary: 0,
            },
            paymentToken: {},
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAmountSelected = this.handleAmountSelected.bind(this)
    }

    onSubmit = async (values: any) => {
        const { history, networkId } = this.props
        const { name, email } = values
        const { crowdloanInstance, investmentAmount } = this.state
        if (!+investmentAmount) {
            return console.error('Can not contribute Zero(0)')
        }

        try {
            this.setState({ transacting: true })
            // Note: Assuming lender can only fund a loan when the loan is started
            const isLoanStarted =
                +(await getCrowdfundStart(crowdloanInstance)) !== ZERO

            const isLoanEnded =
                +(await getCrowdfundEnd(crowdloanInstance)) <
                +prepBigNumber(
                    Math.floor(new Date().getTime() / MILLISECONDS),
                    ZERO,
                    true
                )

            if (!isLoanStarted) {
                return console.error('Crowdloan not yet started')
            }
            if (isLoanEnded) {
                return console.error('Crowdloan already completed')
            }
            const paymentTokenInstance = await getInstance(
                this.state.paymentToken.address
            )

            const valueInERC20 = prepBigNumber(
                investmentAmount,
                this.state.paymentToken.decimals
            )
            const approvedBalance = await allowance(
                paymentTokenInstance,
                await getInjectedAccountAddress(),
                crowdloanInstance.options.address
            )

            let tx
            if (BN(approvedBalance).lt(BN(valueInERC20))) {
                tx = await approveAndFund(
                    paymentTokenInstance,
                    crowdloanInstance,
                    valueInERC20
                )
            } else {
                tx = await fund(crowdloanInstance, valueInERC20)
            }
            // console.log(tx)

            // console.log(`
            // investmentAmount:       ${investmentAmount}
            // valueInERC20:           ${valueInERC20}
            // Approved Balance:       ${approvedBalance}
            // ================
            // Sender:                 ${tx.from}
            // TransactionHash:        ${tx.transactionHash}
            // Network:                ${networkId}
            // Amount:                 ${tx.events.Fund.returnValues.amount}
            // Email:                  ${email}
            // Name:                   ${name}
            // GasUsed:                ${tx.gasUsed}
            // CumulativeGasUsed:      ${tx.cumulativeGasUsed}
            // `)

            try {
                const resp = await axios.post(INES_FUND_POST_URL, {
                    sender: tx.from,
                    transactionHash: tx.transactionHash,
                    network: networkId.toString(),
                    amount: tx.events.Fund.returnValues.amount,
                    email: email,
                    name: name,
                    gasUsed: tx.gasUsed.toString(),
                    cumulativeGasUsed: tx.cumulativeGasUsed.toString(),
                })
                console.log(resp)
            } catch (error) {
                console.error(error)
            }

            this.setState({ transacting: false })

            history.push(AppPath.LoanOfferThankYou)
            return
        } catch (e) {
            this.setState({ transacting: false })
            return console.error(e)
        }
    }

    componentDidMount = async () => {
        // Get the contract instances for Ines (We'll just bake these in for now).

        const crowdloanInstance = await getDeployedFromConfig(
            'Crowdloan',
            contractAddresses
        )

        try {
            const principalToken = await getPrincipalToken(crowdloanInstance)
            const paymentToken = await getTokenDetailsFromAddress(
                principalToken
            )

            const loanMetadataUrl = await getLoanMetadataUrl(crowdloanInstance)
            const principalRequested = await getPrincipalRequested(
                crowdloanInstance
            )
            const loanMetadata = await fetchLoanMetadata(loanMetadataUrl)

            const loanPeriod = await getLoanPeriod(loanMetadata)
            const incomeSharePercentage = await getIncomeSharePercentage(
                loanMetadata
            )
            const expectedSalary = await getExpectedSalary(loanMetadata)

            this.setState({
                crowdloanInstance,
                loanParams: {
                    incomeSharePercentage,
                    principalRequested,
                    expectedSalary,
                    loanPeriod,
                },
                paymentToken,
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleChange(e: { target: { value: any } }) {
        this.setState({
            investmentAmount: +e.target.value,
        })
    }

    handleAmountSelected = value => {
        this.setState({ investmentAmount: value })
    }

    render() {
        const { investmentAmount, transacting } = this.state
        return (
            <CheckoutWrapper>
                <HeroWrapper>
                    <img
                        style={{
                            position: 'absolute',
                            top: 0,
                            height: '50vh',
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
                            height: '50vh',
                            right: 0,
                        }}
                        src={PatternImage}
                        alt="pattern"
                    />
                </HeroWrapper>
                <CheckoutContainer>
                    {/* <MainContainer> */}
                    <HeroCell>
                        <Row>
                            <Col lg={6} md={12}>
                                <Form
                                    onSubmit={this.onSubmit}
                                    decorators={[focusOnErrors]}
                                    render={({ handleSubmit }) => (
                                        <form onSubmit={handleSubmit}>
                                            <h5>Complete Your Investment</h5>
                                            <Margin top={40}>
                                                <h6>Investment Amount</h6>
                                            </Margin>
                                            <Margin top={10} horizontal={15}>
                                                <Row>
                                                    <RowButton
                                                        value={100}
                                                        onClick={
                                                            this
                                                                .handleAmountSelected
                                                        }
                                                    />
                                                    <RowButton
                                                        value={250}
                                                        onClick={
                                                            this
                                                                .handleAmountSelected
                                                        }
                                                    />
                                                    <RowButton
                                                        value={1000}
                                                        onClick={
                                                            this
                                                                .handleAmountSelected
                                                        }
                                                    />
                                                    <RowButton
                                                        value={5000}
                                                        onClick={
                                                            this
                                                                .handleAmountSelected
                                                        }
                                                    />
                                                </Row>
                                            </Margin>

                                            <Margin top={10} bottom={32}>
                                                <Field
                                                    name="amount"
                                                    type="number"
                                                    // validate={mustBeNumber}
                                                    render={({
                                                        input,
                                                        meta,
                                                    }) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                // label="Investment Amount"
                                                                placeholder="e.g. 100"
                                                                autoFocus={true}
                                                                value={
                                                                    investmentAmount
                                                                }
                                                                onChange={
                                                                    this
                                                                        .handleChange
                                                                }
                                                                // {...input}
                                                                {...meta}
                                                            />
                                                            {meta.touched &&
                                                                meta.error && (
                                                                    <FieldError>
                                                                        {
                                                                            meta.error
                                                                        }
                                                                    </FieldError>
                                                                )}
                                                        </React.Fragment>
                                                    )}
                                                />
                                                <Margin top={5}>
                                                    <small>
                                                        Minimum 10 Dai
                                                    </small>
                                                </Margin>
                                            </Margin>
                                            <Margin top={32} bottom={32}>
                                                <Field
                                                    name="name"
                                                    validate={requiredField}
                                                    render={({
                                                        input,
                                                        meta,
                                                    }) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                label="Name"
                                                                placeholder="Enter your name"
                                                                autoFocus={true}
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {meta.touched &&
                                                                meta.error && (
                                                                    <FieldError>
                                                                        {
                                                                            meta.error
                                                                        }
                                                                    </FieldError>
                                                                )}
                                                        </React.Fragment>
                                                    )}
                                                />
                                            </Margin>
                                            <Margin bottom={32}>
                                                <Field
                                                    name="email"
                                                    validate={composeValidators(
                                                        requiredField,
                                                        emailFormat
                                                    )}
                                                    render={({
                                                        input,
                                                        meta,
                                                    }) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                type="email"
                                                                label="Email"
                                                                placeholder="Enter your email"
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {meta.touched &&
                                                                meta.error && (
                                                                    <FieldError>
                                                                        {
                                                                            meta.error
                                                                        }
                                                                    </FieldError>
                                                                )}
                                                        </React.Fragment>
                                                    )}
                                                />
                                            </Margin>
                                            <Margin top={24}>
                                                <b>
                                                    <p>Disclaimers:</p>
                                                </b>
                                            </Margin>
                                            <Margin vertical={16}>
                                                <Field
                                                    name="tac"
                                                    type="checkbox"
                                                    validate={requiredChecked}
                                                    render={({
                                                        input,
                                                        meta,
                                                    }) => (
                                                        <React.Fragment>
                                                            <Checkbox
                                                                id="tac"
                                                                label="I have read the terms and conditions of this loan"
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {meta.touched &&
                                                                meta.error && (
                                                                    <Padding
                                                                        left={
                                                                            24
                                                                        }
                                                                    >
                                                                        <FieldError>
                                                                            {
                                                                                meta.error
                                                                            }
                                                                        </FieldError>
                                                                    </Padding>
                                                                )}
                                                        </React.Fragment>
                                                    )}
                                                />
                                            </Margin>
                                            <Margin vertical={16}>
                                                <Field
                                                    name="risk"
                                                    type="checkbox"
                                                    validate={requiredChecked}
                                                    render={({
                                                        input,
                                                        meta,
                                                    }) => (
                                                        <React.Fragment>
                                                            <Checkbox
                                                                id="risk"
                                                                name="risk"
                                                                label="I acknowledge the risks of this experiment"
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {meta.touched &&
                                                                meta.error && (
                                                                    <Padding
                                                                        left={
                                                                            24
                                                                        }
                                                                    >
                                                                        <FieldError>
                                                                            {
                                                                                meta.error
                                                                            }
                                                                        </FieldError>
                                                                    </Padding>
                                                                )}
                                                        </React.Fragment>
                                                    )}
                                                />
                                            </Margin>
                                            <Row>
                                                <Col lg={12} md={12}>
                                                    <Margin top={8}>
                                                        <Button
                                                            type="submit"
                                                            color="green"
                                                            disabled={
                                                                transacting ||
                                                                !this.state
                                                                    .crowdloanInstance
                                                            }
                                                        >
                                                            {transacting ? (
                                                                <Spinner size="20" />
                                                            ) : (
                                                                'Place my Investment'
                                                            )}
                                                        </Button>
                                                    </Margin>
                                                </Col>
                                            </Row>
                                        </form>
                                    )}
                                />
                            </Col>
                            <Col lg={6} md={12}>
                                <IncomeShareCalculator
                                    investmentAmount={investmentAmount}
                                />
                            </Col>
                        </Row>
                    </HeroCell>
                    {/* </MainContainer> */}
                </CheckoutContainer>
            </CheckoutWrapper>
        )
    }
}

function mapState(state) {
    return { networkId: state.networkId }
}

export default withRouter<CheckoutProps>(
    withNavbarAndFooter(
        connect(
            mapState,
            {}
        )(Checkout)
    )
)
