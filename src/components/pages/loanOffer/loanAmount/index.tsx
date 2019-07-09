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
  composeValidators
} from "../../../../constant/validation";
import createDecorator from "final-form-focus";

interface LoanAmountProps extends RouteComponentProps<any> {}

const focusOnErrors = createDecorator();
const bredcrumbData = [
  { title: " Personal information", active: true },
  { title: "Detail amount", active: true }
];

class LoanAmount extends React.Component<LoanAmountProps, {}> {
  constructor(props: LoanAmountProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (data: any) => {
    const { history } = this.props;
    console.log(data);
    history.push(AppPath.LoanOfferThankYou);
  };

  render() {
    const { history } = this.props;
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
                    <Margin vertical={48}>
                      <Breadcrumb data={bredcrumbData} />
                    </Margin>
                    <Margin bottom={32}>
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
                              {...input}
                              {...meta}
                            />
                            {meta.touched && meta.error && (
                              <FieldError>{meta.error}</FieldError>
                            )}
                          </React.Fragment>
                        )}
                      />
                    </Margin>
                    <Margin top={48} bottom={24}>
                      <h5>Confirm Loan</h5>
                      <p>Total loan amount:</p>
                      <Margin top={16}>
                        <h3>7 Dai</h3>
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
                          validate={composeValidators(
                            requiredField,
                            mustBeNumber
                          )}
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
                          validate={composeValidators(
                            requiredField,
                            mustBeNumber
                          )}
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
                      <Margin vertical={16}>
                        <Field
                          name="ableToContact"
                          type="checkbox"
                          validate={composeValidators(
                            requiredField,
                            mustBeNumber
                          )}
                          render={({ input, meta }) => (
                            <React.Fragment>
                              <Checkbox
                                id="ableToContact"
                                name="ableToContact"
                                label="I am willing to be contacted through email"
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
                    </Margin>
                  </Col>
                  <Col lg={6} md={12}>
                    <LoanAmountSimulation>
                      <h5>Simulated Returns</h5>
                      <p>You can expect to earn a total interest of:</p>
                      <Margin vertical={24}>
                        <h3>0.42 Dai</h3>
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
