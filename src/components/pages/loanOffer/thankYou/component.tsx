import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPath } from "../../../../constant/appPath";
import { Row, Col, Button } from "../../../lib";
import ThanksIllustration from "../../../../images/illustration/thanks.svg";
import PatternImage from "../../../../images/pattern.png";
import { HeroWrapper, HeroContent, HeroTitle } from "./styled";

interface LoanOfferThankYouProps extends RouteComponentProps<any> {}

const LoanOfferThankYou: React.FC<LoanOfferThankYouProps> = ({ history }) => (
  <HeroWrapper>
    <HeroTitle>
      <img
        style={{
          position: "absolute",
          top: 0,
          height: "100%",
          left: 0,
          transform: "scaleX(-1)"
        }}
        src={PatternImage}
        alt="pattern"
      />
      <img
        style={{ position: "absolute", top: 0, height: "100%", right: 0 }}
        src={PatternImage}
        alt="pattern"
      />
    </HeroTitle>
    <Container>
      <div style={{ position: "relative", top: -200 }}>
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
      </div>
    </Container>
  </HeroWrapper>
);

export default withRouter<LoanOfferThankYouProps>(LoanOfferThankYou);
