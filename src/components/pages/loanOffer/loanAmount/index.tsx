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
import {Crowdloan, TermsContract} from '../../../../utils/contractData';
import contractAddresses from "../../../../config/ines.fund";
import { getContractInstance } from '../../../../utils/getDeployed';
import { contractMethodCall, getNetworkId } from '../../../../utils/web3Utils';

interface LoanAmountProps extends RouteComponentProps<any> {}

interface LoanAmountState {
  loanAmoutnValue: number;
  crowdLoanInstance: object;
  termsContractInstance: object;
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
      loanAmoutnValue: 0,
      crowdLoanInstance: null,
      termsContractInstance: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = async () => {
    const networkId = await getNetworkId();
    const crowdLoanAddress = contractAddresses[networkId]['Crowdloan'];
    const termsContractAddress = contractAddresses[networkId]['TermsContract'];

    // Get the contract instances for Ines (We'll just bake these in for now).
    const crowdLoanInstance = await getContractInstance(
      Crowdloan.abi,
      crowdLoanAddress
    );
    const termsContractInstance = await getContractInstance(
      TermsContract.abi,
      termsContractAddress
    );

    this.setState({
      crowdLoanInstance,
      termsContractInstance
    });
  }

  onSubmit = async (data: any) => {
    const { history } = this.props;
    history.push(AppPath.LoanOfferThankYou);
    // const result = await contractMethodCall(crowdLoanInstance, 'getCrowdfundParams');
    // const loanStatus = await contractMethodCall(termsContractInstance, 'getLoanStatus');
  };

  handleChange(e: { target: { value: any } }) {
    this.setState({
      loanAmoutnValue: Number(e.target.value)
    });
  }

  render() {
    const { history } = this.props;
    const { loanAmoutnValue } = this.state;
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
                          {((loanAmoutnValue * 0.5) / 100) * 12}
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
                          <Button color="purple" type="submit">
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
