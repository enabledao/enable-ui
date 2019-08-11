import React from "react";
import {Form, Field} from "react-final-form";
import {Container} from "../../../../styles/bases";
import {Margin, Padding} from "../../../../styles/utils";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppPath} from "../../../../constant/appPath";
import {Breadcrumb, Row, Col, Button, TextField, Checkbox, FieldError} from "../../../lib";
import {StepLoanOfferWrapper, LoanAmountSimulation} from "../styled";
import {
    requiredField,
    mustBeNumber,
    composeValidators,
    requiredChecked
} from "../../../../constant/validation";
import createDecorator from "final-form-focus";
import contractAddresses from "../../../../config/ines.fund";
import { LoanStatuses, INTEREST_DECIMALS } from "../../../../config/constants";
import {simulateTotalInterest} from "../../../../utils/jsCalculator";
import { approveAndFund, fund  } from "../../../../utils/crowdloan";
import { BN, getInjectedAccountAddress, prepBigNumber } from '../../../../utils/web3Utils';
import { getDeployedFromConfig  } from "../../../../utils/getDeployed";
import { allowance, getInstance, getTokenDetailsFromAddress } from '../../../../utils/paymentToken';
import { getInterestRate, getLoanStatus, getNumScheduledPayments, getPrincipalToken } from '../../../../utils/termsContract';


interface LoanAmountProps extends RouteComponentProps<any> {}

interface LoanAmountState {
    loanAmoutnValue: number;
    crowdLoanInstance: object;
    termsContractInstance: object;
    loanParams: any,
    paymentToken: any
}

const focusOnErrors = createDecorator();
const bredcrumbData = [
    {title: " Personal information", active: true},
    {title: "Detail amount", active: true}
];

class LoanAmount extends React.Component<LoanAmountProps, LoanAmountState> {
    constructor(props: LoanAmountProps) {
        super(props);
        this.state = {
            loanAmoutnValue: 0,
            crowdLoanInstance: null,
            termsContractInstance: null,
            loanParams: {
                interestRate: 0,
                numScheduledPayments: 0
            },
            paymentToken: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    simulateInterest = (contribution) => {
        const { interestRate, numScheduledPayments } = this.state.loanParams;
        return simulateTotalInterest(contribution, interestRate, numScheduledPayments);
    }

    componentDidMount = async () => {

        // Get the contract instances for Ines (We'll just bake these in for now).

        const termsContractInstance = await getDeployedFromConfig('TermsContract', contractAddresses);
        const crowdLoanInstance = await getDeployedFromConfig('Crowdloan', contractAddresses);

        try {
            const principalToken = await getPrincipalToken(termsContractInstance);
            const paymentToken = await getTokenDetailsFromAddress(principalToken);
            const interestRate = await getInterestRate(termsContractInstance);
            const numScheduledPayments = parseInt(await getNumScheduledPayments(termsContractInstance));

            paymentToken.address = principalToken;

            this.setState({
                crowdLoanInstance,
                termsContractInstance,
                loanParams: {
                    interestRate: prepBigNumber(interestRate,INTEREST_DECIMALS,true),
                    numScheduledPayments
                },
                paymentToken
            });

        } catch (err) {
            console.log(err)
        }
    };

    onSubmit = async (data: any) => {
        const {history} = this.props;
        const {termsContractInstance, crowdLoanInstance, loanAmoutnValue} = this.state;

        // Note: Assuming lender can only fund a loan when the loan is started
        const isLoanStarted = Number(await getLoanStatus(termsContractInstance)) === LoanStatuses.FUNDING_STARTED;
        const paymentTokenInstance = await getInstance(this.state.paymentToken.address);

        if (isLoanStarted) {
            const valueInERC20 = prepBigNumber(loanAmoutnValue, this.state.paymentToken.decimals);
            const approvedBalance = await allowance(paymentTokenInstance, await getInjectedAccountAddress(), this.state.paymentToken.address);

            console.log(valueInERC20, approvedBalance)

            let tx;
            if (BN(approvedBalance).lt(BN(valueInERC20))) {
                tx = await approveAndFund(paymentTokenInstance, crowdLoanInstance, valueInERC20)
            } else {
                tx = await fund(crowdLoanInstance, valueInERC20);
            }
            console.log(tx);

            history.push(AppPath.LoanOfferThankYou);
            return;
        }
        // TO DO (Dennis): Display an error message or redirect to the home page if the loan is not yet started, failed, or completed.
    };

    handleChange(e: {target: {value: any}}) {
        this.setState({
            loanAmoutnValue: Number(e.target.value)
        });
    }

    render() {
        const {history} = this.props;
        const {loanAmoutnValue} = this.state;
        return (
            <StepLoanOfferWrapper>
                <Container>
                    <h4>You're almost done!</h4>
                    <p>Lastly, please input the amount you're willing to lend</p>
                    <Form
                        onSubmit={this.onSubmit}
                        decorators={[focusOnErrors]}
                        render={({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <Margin top={48} bottom={24}>
                                            <Breadcrumb data={bredcrumbData} />
                                        </Margin>
                                        <Margin bottom={16}>
                                            <Row>
                                                <Col lg={6} md={12}>
                                                    <Field
                                                        name='loanAmount'
                                                        type='number'
                                                        validate={composeValidators(
                                                            requiredField,
                                                            mustBeNumber
                                                        )}
                                                        render={({input, meta}) => (
                                                            <React.Fragment>
                                                                <TextField
                                                                    label='Loan Amount'
                                                                    type='number'
                                                                    placeholder='Enter your loan amount'
                                                                    autoFocus={true}
                                                                    value={
                                                                        loanAmoutnValue === 0
                                                                            ? ""
                                                                            : loanAmoutnValue
                                                                    }
                                                                    onChangeCustom={this.handleChange}
                                                                    {...input}
                                                                    {...meta}
                                                                />
                                                                {meta.touched && meta.error && (
                                                                    <FieldError>{meta.error}</FieldError>
                                                                )}
                                                            </React.Fragment>
                                                        )}
                                                    />
                                                </Col>
                                            </Row>
                                        </Margin>
                                        <Margin vertical={24}>
                                            <h5>Confirm Loan</h5>
                                            <p>Total loan amount:</p>
                                            <Margin top={16}>
                                                <h3>
                                                    {loanAmoutnValue}
                                                    &nbsp;<small>Dai</small>
                                                </h3>
                                                <p>Excludes transaction fees and gas</p>
                                            </Margin>
                                            <Margin top={24}>
                                                <b>
                                                    <p>Disclaimers:</p>
                                                </b>
                                            </Margin>
                                            <Margin vertical={16}>
                                                <Field
                                                    name='tac'
                                                    type='checkbox'
                                                    validate={requiredChecked}
                                                    render={({input, meta}) => (
                                                        <React.Fragment>
                                                            <Checkbox
                                                                id='tac'
                                                                label='I have read the terms and conditions of this loan'
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {meta.touched && meta.error && (
                                                                <Padding left={24}>
                                                                    <FieldError>{meta.error}</FieldError>
                                                                </Padding>
                                                            )}
                                                        </React.Fragment>
                                                    )}
                                                />
                                            </Margin>
                                            <Margin vertical={16}>
                                                <Field
                                                    name='risk'
                                                    type='checkbox'
                                                    validate={requiredChecked}
                                                    render={({input, meta}) => (
                                                        <React.Fragment>
                                                            <Checkbox
                                                                id='risk'
                                                                name='risk'
                                                                label='I acknowledge the risks of this experiment'
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {meta.touched && meta.error && (
                                                                <Padding left={24}>
                                                                    <FieldError>{meta.error}</FieldError>
                                                                </Padding>
                                                            )}
                                                        </React.Fragment>
                                                    )}
                                                />
                                            </Margin>
                                            <b>
                                                <p>After submit you'll contacted through email</p>
                                            </b>
                                        </Margin>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <LoanAmountSimulation>
                                            <h5>Simulated Returns</h5>
                                            <p>You can expect to earn a total interest of:</p>
                                            <Margin vertical={24}>
                                                <h4>
                                                    {this.simulateInterest(loanAmoutnValue)}
                                                    &nbsp;<small>Dai</small>
                                                </h4>
                                            </Margin>
                                            <p>
                                                By using this service, you are agreeing to the disclaimer
                                                for simulate returns. Simulated return also does not
                                                count gas fees
                                            </p>
                                        </LoanAmountSimulation>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <Row>
                                            <Col lg={6} md={12}>
                                                <Margin top={8}>
                                                    <Button
                                                        onClick={() =>
                                                            history.push(AppPath.LoanPersonalInfo)
                                                        }
                                                    >
                                                        Back
                                                    </Button>
                                                </Margin>
                                            </Col>
                                            <Col lg={6} md={12}>
                                                <Margin top={8}>
                                                    <Button color='purple' type='submit'>
                                                        Submit
                                                    </Button>
                                                </Margin>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </form>
                        )}
                    />
                </Container>
            </StepLoanOfferWrapper>
        );
    }
}

export default withRouter<LoanAmountProps>(LoanAmount);
