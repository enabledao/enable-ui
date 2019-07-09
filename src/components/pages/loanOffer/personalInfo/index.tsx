import React from "react";
import { Form, Field } from "react-final-form";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import {
  Breadcrumb,
  Row,
  Col,
  TextField,
  Checkbox,
  Button,
  FieldError
} from "../../../lib";
import { StepLoanOfferWrapper } from "../styled";
import {
  requiredField,
  emailFormat,
  composeValidators
} from "../../../../constant/validation";
import createDecorator from "final-form-focus";
import FormIllustration from "../../../../images/illustration/form.svg";

interface PersonalInfoProps extends RouteComponentProps<any> {}

const focusOnErrors = createDecorator();
const bredcrumbData = [
  { title: " Personal information", active: true },
  { title: "Detail amount", active: false }
];

class PersonalInfo extends React.Component<PersonalInfoProps, {}> {
  constructor(props: PersonalInfoProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (data: any) => {
    const { history } = this.props;
    console.log(data);
    history.push(AppPath.LoanOfferAmount);
  };

  render() {
    const { history } = this.props;
    return (
      <StepLoanOfferWrapper>
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <h4>One step closer to helping Ines!</h4>
              <p>
                For starters, please let us know your name and email address.
              </p>
              <Form
                onSubmit={this.onSubmit}
                decorators={[focusOnErrors]}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Margin top={24} bottom={48}>
                      <Breadcrumb data={bredcrumbData} />
                    </Margin>
                    <Margin bottom={32}>
                      <Field
                        name="name"
                        validate={requiredField}
                        render={({ input, meta }) => (
                          <React.Fragment>
                            <TextField
                              label="Name"
                              placeholder="Enter your name"
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
                      <Margin top={16}>
                        <Checkbox
                          id="anonymous"
                          name="anonymous"
                          label="Stay anonymous"
                        />
                      </Margin>
                    </Margin>
                    <Margin bottom={32}>
                      <Field
                        name="email"
                        validate={composeValidators(requiredField, emailFormat)}
                        render={({ input, meta }) => (
                          <React.Fragment>
                            <TextField
                              type="email"
                              label="Email"
                              placeholder="Enter your email"
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
                    <Margin vertical={32}>
                      <Checkbox
                        id="videoInterview"
                        name="videoInterview"
                        label="I would like to have a video interview with the borrower"
                      />
                    </Margin>
                    <Row>
                      <Col lg={6} md={12}>
                        <Margin top={8}>
                          <Button onClick={() => history.push(AppPath.home)}>
                            Back
                          </Button>
                        </Margin>
                      </Col>
                      <Col lg={6} md={12}>
                        <Margin top={8}>
                          <Button type="submit" color="purple">
                            Continue
                          </Button>
                        </Margin>
                      </Col>
                    </Row>
                  </form>
                )}
              />
            </Col>
            <Col lg={6} md="hidden" text="center">
              <img
                src={FormIllustration}
                alt="Form - Illustraion"
                width={340}
              />
            </Col>
          </Row>
        </Container>
      </StepLoanOfferWrapper>
    );
  }
}

export default withRouter<PersonalInfoProps>(PersonalInfo);
