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
import { required } from "../../../../constant/validation";
import createDecorator from "final-form-focus";

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
          <h4>One step closer to helping Ines!</h4>
          <p>For starters, please let us know your name and email address.</p>
          <Form
            onSubmit={this.onSubmit}
            decorators={[focusOnErrors]}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={6} md={12}>
                    <Margin top={24} bottom={48}>
                      <Breadcrumb data={bredcrumbData} />
                    </Margin>
                    <Margin bottom={32}>
                      <Field
                        name="name"
                        validate={required}
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
                        validate={required}
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

export default withRouter<PersonalInfoProps>(PersonalInfo);
