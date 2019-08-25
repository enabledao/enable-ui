import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import { Row, Col, Button } from "../../../lib";
import ThanksIllustration from "../../../../images/illustration/thanks.svg";
import { HeroWrapper, HeroContent } from "./styled";

interface LoanOfferThankYouProps extends RouteComponentProps<any> {}

const LoanOfferThankYou: React.FC<LoanOfferThankYouProps> = ({ history }) => (
  <HeroWrapper>
    <Container>
      <HeroContent>
        <Row justify="center" text="center">
          <Col lg={6} md={12}>
            <Margin bottom={48}>
              <img
                src={ThanksIllustration}
                alt="Thanks - Illustration"
                width={340}
              />
            </Margin>
            <Margin bottom={16}>
              <h4>Thank You for Your Contributon!</h4>
            </Margin>
            <p>We really appreciate your investment in this project!</p>
            <Row justify="center">
              <Col lg={6} md={12}>
                <Margin top={32}>
                  <Button
                    color="green"
                    onClick={() => history.push(AppPath.myLoan)}
                  >
                    My Investment
                  </Button>
                </Margin>
              </Col>
            </Row>
          </Col>
        </Row>
      </HeroContent>
    </Container>
  </HeroWrapper>
);

export default withRouter<LoanOfferThankYouProps>(LoanOfferThankYou);
