import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import { Row, Col, Button } from "../../../lib";
import { StepLoanOfferWrapper } from "../styled";

interface LoanOfferThankYouProps extends RouteComponentProps<any> {}

const LoanOfferThankYou: React.FC<LoanOfferThankYouProps> = ({ history }) => (
  <StepLoanOfferWrapper>
    <Container>
      <Row justify="center">
        <Col lg={6} md={12}>
          <Margin bottom={24}>
            <h4>Thank you !</h4>
          </Margin>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            molestiae in deserunt laborum libero quidem fuga ipsa perferendis,
            assumenda vitae corporis qui porro esse. At itaque dignissimos dolor
            laboriosam hic.
          </p>
          <Row>
            <Col lg={6} md={12}>
              <Margin top={32}>
                <Button
                  color="purple"
                  onClick={() => history.push(AppPath.LoanOfferThankYou)}
                >
                  Check Your loan
                </Button>
              </Margin>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </StepLoanOfferWrapper>
);

export default withRouter<LoanOfferThankYouProps>(LoanOfferThankYou);
