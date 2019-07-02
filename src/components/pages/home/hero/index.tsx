import React from "react";
import HeroIllustration from "../../../../images/illustration/hero-welcome.svg";
import { Row, Col, Progress, Button } from "../../../lib";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { HeroWrapper, HeroCell } from "./Styled";

const HomeHero: React.FC = () => (
  <HeroWrapper>
    <HeroCell>
      <Container>
        <Row>
          <Col lg={5} md={4} sm={12} text="center">
            <img
              src={HeroIllustration}
              alt="HomeHero - Illustraion"
              width={300}
            />
          </Col>
          <Col lg={7} md={8} sm={12}>
            <h1>Enabling Opportunity</h1>
            <p>Extend a 60,000 Dai education loan to: </p>
            <Margin top={48}>
              <h5>Widya Imanesti</h5>
              <p>Jakarta - Indonesia</p>
              <p>
                Ines is raising a 60,000 Dai loan to attend Cornell University
                for a Masters in HR
              </p>
              <Margin top={24}>
                <Row>
                  <Col lg={3} md={6}>
                    <h4>2,900</h4>
                    <small>Raised 0f 60,000 goal</small>
                  </Col>
                  <Col lg={3} md={6}>
                    <h4>6%</h4>
                    <small>Interest per annum</small>
                  </Col>
                  <Col lg={3} md={6}>
                    <h4>12</h4>
                    <small>Month of loan period</small>
                  </Col>
                  <Col lg={3} md={6}>
                    <h4>29</h4>
                    <small>Days left</small>
                  </Col>
                </Row>
              </Margin>
              <Row>
                <Col lg={10} md={12}>
                  <Margin top={24}>
                    <Progress current={20} />
                  </Margin>
                </Col>
              </Row>
              <Margin top={16} bottom={24}>
                <small>
                  <a href="/">Powered by 39 contributors</a>
                </small>
              </Margin>
              <Row align="center">
                <Col lg={6} md={12}>
                  <Margin top={16}>
                    <Button onClick={() => console.log("click")}>
                      Start lend now
                    </Button>
                  </Margin>
                </Col>
                <Col lg={4} md={12}>
                  <Margin top={16}>
                    <a href="/">See the video</a>
                  </Margin>
                </Col>
              </Row>
            </Margin>
          </Col>
        </Row>
      </Container>
    </HeroCell>
  </HeroWrapper>
);

export default HomeHero;
