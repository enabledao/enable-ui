import React from "react";
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
  Button
} from "../../../lib";
import { StepLoanOfferWrapper } from "../styled";

interface PersonalInfoProps extends RouteComponentProps<any> {}

const bredcrumbData = [
  { title: " Personal information", active: true },
  { title: "Detail amount", active: false }
];

const PersonalInfo: React.FC<PersonalInfoProps> = ({ history }) => (
  <StepLoanOfferWrapper>
    <Container>
      <h4>One step closer to helping Ines!</h4>
      <p>For starters, please let us know your name and email address.</p>
      <Row>
        <Col lg={6} md={12}>
          <Margin top={24} bottom={48}>
            <Breadcrumb data={bredcrumbData} />
          </Margin>
          <Margin bottom={32}>
            <TextField
              label="Name"
              placeholder="Enter your name"
              autoFocus={true}
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
            <TextField
              type="email"
              label="Email"
              placeholder="Enter your email"
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
                <Button onClick={() => history.push(AppPath.home)}>Back</Button>
              </Margin>
            </Col>
            <Col lg={6} md={12}>
              <Margin top={8}>
                <Button
                  color="purple"
                  onClick={() => history.push(AppPath.LoanOfferAmount)}
                >
                  Continue
                </Button>
              </Margin>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </StepLoanOfferWrapper>
);

export default withRouter<PersonalInfoProps>(PersonalInfo);
