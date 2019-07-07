import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import { Breadcrumb, Row, Col, Button } from "../../../lib";
import { StepLoanOfferWrapper } from "../styled";

interface LoanOfferStepTwoProps extends RouteComponentProps<any> {}

const bredcrumbData = [
  { title: " Personal Information", active: true },
  { title: "Detail Amount", active: true }
];

const LoanOfferStepTwo: React.FC<LoanOfferStepTwoProps> = ({ history }) => (
  <StepLoanOfferWrapper>
    <Container>
      <h4>You're almost done !</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        molestiae in deserunt laborum libero quidem fuga ipsa perferendis,
        assumenda vitae corporis qui porro esse. At itaque dignissimos dolor
        laboriosam hic.
      </p>
      <Margin vertical={48}>
        <Breadcrumb data={bredcrumbData} />
      </Margin>
      <Row>
        <Col lg={6} md={12}>
          <Margin bottom={32}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              alias ipsam quaerat nostrum. Aliquam accusantium voluptatibus quia
              delectus. Ad fugiat quod corporis illum dignissimos aliquid quas,
              dicta quis? Fugiat, ipsam!
            </p>
          </Margin>
          <Row>
            <Col lg={6} md={12}>
              <Margin top={8}>
                <Button onClick={() => history.push(AppPath.loanOfferStepOne)}>
                  Back
                </Button>
              </Margin>
            </Col>
            <Col lg={6} md={12}>
              <Margin top={8}>
                <Button color="purple" onClick={() => console.log("click")}>
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

export default withRouter<LoanOfferStepTwoProps>(LoanOfferStepTwo);
