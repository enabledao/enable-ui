import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import {
  Breadcrumb,
  Row,
  Col,
  Button,
  TextField,
  Checkbox
} from "../../../lib";
import { StepLoanOfferWrapper, LoanAmountSimulation } from "../styled";

interface LoanAmountProps extends RouteComponentProps<any> {}

const bredcrumbData = [
  { title: " Personal information", active: true },
  { title: "Detail amount", active: true }
];

const LoanAmount: React.FC<LoanAmountProps> = ({ history }) => (
  <StepLoanOfferWrapper>
    <Container>
      <h4>You're almost done!</h4>
      <p>Lastly, please input the amount you're willing to lend</p>
      <Row>
        <Col lg={6} md={12}>
          <Margin vertical={48}>
            <Breadcrumb data={bredcrumbData} />
          </Margin>
          <Margin bottom={32}>
            <TextField
              label="Loan Amount"
              type="number"
              placeholder="Enter your loan amount"
              autoFocus={true}
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
              <Checkbox
                id="tac"
                name="tac"
                label="I have read the Terms and Conditions of this loan"
              />
            </Margin>
            <Margin vertical={16}>
              <Checkbox
                id="risk"
                name="risk"
                label="I acknowledge the risks of this experiment"
              />
            </Margin>
            <Margin vertical={16}>
              <Checkbox
                id="ableToContact"
                name="ableToContact"
                label="I am willing to be contacted through email"
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
              By using this service, you are agreeing to the disclaimer for
              simulate returns. Simulated return also does not count gas fees
            </p>
          </LoanAmountSimulation>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12}>
          <Row>
            <Col lg={6} md={12}>
              <Margin top={8}>
                <Button onClick={() => history.push(AppPath.LoanPersonalInfo)}>
                  Back
                </Button>
              </Margin>
            </Col>
            <Col lg={6} md={12}>
              <Margin top={8}>
                <Button
                  color="purple"
                  onClick={() => history.push(AppPath.LoanOfferThankYou)}
                >
                  Submit
                </Button>
              </Margin>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </StepLoanOfferWrapper>
);

export default withRouter<LoanAmountProps>(LoanAmount);
