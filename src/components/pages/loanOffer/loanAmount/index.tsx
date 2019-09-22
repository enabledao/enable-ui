import React from "react";
import { Form, Field } from "react-final-form";
import { Container } from "../../../../styles/bases";
import { Margin, Padding } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import {
  Breadcrumb,
  Row,
  Col,
  Button,
  TextField,
  Checkbox,
  FieldError
} from "../../../lib";
import { StepLoanOfferWrapper, LoanAmountSimulation } from "../styled";
import {
  requiredField,
  mustBeNumber,
  composeValidators,
  requiredChecked
} from "../../../../constant/validation";
import createDecorator from "final-form-focus";
import contractAddresses from "../../../../config/ines.fund";
import { MILLISECONDS, ZERO } from "../../../../config/constants";
import { calcTotalInterest } from "../../../../utils/jsCalculator";
import { approveAndFund, fund, getPrincipalToken, getPrincipalRequested, getCrowdfundStart, getCrowdfundEnd, getLoanMetadataUrl } from "../../../../utils/crowdloan";
import {
    fetchLoanMetadata,
    getExpectedSalary, 
    getIncomeSharePercentage,
    getLoanPeriod
} from "../../../../utils/metadata";
import {
  BN,
  getInjectedAccountAddress,
  prepBigNumber
} from "../../../../utils/web3Utils";
import { getDeployedFromConfig } from "../../../../utils/getDeployed";
import {
  allowance,
  getInstance,
  getTokenDetailsFromAddress
} from "../../../../utils/paymentToken";

interface LoanAmountProps extends RouteComponentProps<any> {}

interface LoanAmountState {
  transacting: boolean;
  loanAmoutnValue: number;
  crowdloanInstance: any;
  loanParams: any;
  paymentToken: any;
}

const focusOnErrors = createDecorator();
const bredcrumbData = [
  { title: " Personal information", active: true },
  { title: "Detail amount", active: true }
];

class LoanAmount extends React.Component<LoanAmountProps, LoanAmountState> {
  constructor(props: LoanAmountProps) {
    super(props);
    this.state = {
      transacting: false,
      loanAmoutnValue: 0,
      crowdloanInstance: null,
      loanParams: {
        interestRate: 0,
        loanPeriod: 0,
        principalRequested: 0,
        expectedSalary: 0,
      },
      paymentToken: {}
  };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  simulateInterest = contribution => {
    const { interestRate, loanPeriod, principalRequested, expectedSalary } = this.state.loanParams;
    if (!interestRate || !loanPeriod || !principalRequested || !expectedSalary ) {
      return "0";
    }
    return calcTotalInterest(
        prepBigNumber(
          contribution,
          this.state.paymentToken.decimals,
        ),
        principalRequested,
        interestRate,
        expectedSalary,
        loanPeriod
    );
  };

  componentDidMount = async () => {
    // Get the contract instances for Ines (We'll just bake these in for now).

    const crowdloanInstance = await getDeployedFromConfig(
      "Crowdloan",
      contractAddresses
    );

    try {
      const principalToken = await getPrincipalToken(crowdloanInstance);
      const paymentToken = await getTokenDetailsFromAddress(principalToken);

      const loanMetadataUrl = await getLoanMetadataUrl(crowdloanInstance);
      const principalRequested = await getPrincipalRequested(crowdloanInstance);
      const loanMetadata = await fetchLoanMetadata(loanMetadataUrl);

      const loanPeriod = await getLoanPeriod(loanMetadata);
      const interestRate = await getIncomeSharePercentage(loanMetadata);
      const expectedSalary = await getExpectedSalary(loanMetadata);

      this.setState({
        crowdloanInstance,
        loanParams: {
          interestRate,
          principalRequested,
          expectedSalary,
          loanPeriod
        },
        paymentToken
      });
    } catch (err) {
      console.log(err);
    }
  };

  onSubmit = async (data: any) => {
    const { history } = this.props;
    const {
      crowdloanInstance,
      loanAmoutnValue,
    } = this.state;
    if (!+loanAmoutnValue) {
      return console.error("Can not contribute Zero(0)");
    }

    // Note: Assuming lender can only fund a loan when the loan is started
    const isLoanStarted =
      +(await getCrowdfundStart(crowdloanInstance)) !==
      ZERO;
    
    const isLoanEnded =
      +(await getCrowdfundEnd(crowdloanInstance)) <
      +prepBigNumber((new Date().getDate() / MILLISECONDS), ZERO, true)
      ;

    if (!isLoanStarted) {
      return console.error("Crowdloan not yet started");
    }
    if (!isLoanEnded) {
      return console.error("Crowdloan already completed");
    }
    const paymentTokenInstance = await getInstance(
      this.state.paymentToken.address
    );

    try {
      this.setState({ transacting: true });
      const valueInERC20 = prepBigNumber(
        loanAmoutnValue,
        this.state.paymentToken.decimals
      );
      const approvedBalance = await allowance(
        paymentTokenInstance,
        await getInjectedAccountAddress(),
        crowdloanInstance.options.address
      );

      let tx;
      if (BN(approvedBalance).lt(BN(valueInERC20))) {
        tx = await approveAndFund(
          paymentTokenInstance,
          crowdloanInstance,
          valueInERC20
        );
      } else {
        tx = await fund(crowdloanInstance, valueInERC20);
      }
      console.log(tx);
      this.setState({ transacting: false });

      history.push(AppPath.LoanOfferThankYou);
      return;
    } catch (e) {
      this.setState({ transacting: false });
      return console.error(e);
    }
    // TO DO (Dennis): Display an error message or redirect to the home page if the loan is not yet started, failed, or completed.
  };

  handleChange(e: { target: { value: any } }) {
    this.setState({
      loanAmoutnValue: +e.target.value
    });
  }

  render() {
    const { history } = this.props;
    const { loanAmoutnValue, transacting } = this.state;
    return (
      <StepLoanOfferWrapper>
        <Container>
          <h4>You're almost done!</h4>
          <p>Lastly, please input the amount you're willing to lend</p>
          <Form
            onSubmit={this.onSubmit}
            decorators={[focusOnErrors]}
            render={({ handleSubmit }) => (
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
                            name="loanAmount"
                            type="number"
                            validate={composeValidators(
                              requiredField,
                              mustBeNumber
                            )}
                            render={({ input, meta }) => (
                              <React.Fragment>
                                <TextField
                                  label="Loan Amount"
                                  type="number"
                                  placeholder="Enter your loan amount"
                                  autoFocus={true}
                                  value={
                                    loanAmoutnValue === 0 ? "" : loanAmoutnValue
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
                          name="tac"
                          type="checkbox"
                          validate={requiredChecked}
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <Checkbox
                                id="tac"
                                label="I have read the terms and conditions of this loan"
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
                          name="risk"
                          type="checkbox"
                          validate={requiredChecked}
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <Checkbox
                                id="risk"
                                name="risk"
                                label="I acknowledge the risks of this experiment"
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
                          {!this.state.paymentToken
                            ? "0" 
                            : prepBigNumber(
                              this.simulateInterest(loanAmoutnValue),
                                this.state.paymentToken.decimals,
                                true
                            )}
                          {}
                          &nbsp;<small>Dai</small>
                        </h4>
                      </Margin>
                      <p>
                        By using this service, you are agreeing to the
                        disclaimer for simulate returns. Simulated return also
                        does not count gas fees
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
                          <Button
                            color="green"
                            type="submit"
                            disabled={transacting}
                          >
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
