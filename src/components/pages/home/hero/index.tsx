import React from "react";
import HeroIllustration from "../../../../images/illustration/hero-welcome.svg";
import avatarAlex from "../../../../images/avatar/alex.jpg";
import avatarAverie from "../../../../images/avatar/averie.jpg";
import avatarBrooke from "../../../../images/avatar/brooke.jpg";
import avatarIvana from "../../../../images/avatar/ivana.jpg";
import avatarShamanta from "../../../../images/avatar/shamanta.jpg";
import avatarInes from "../../../../images/avatar/ines.jpeg";
import { Container } from "../../../../styles/bases";
import { Margin, MobileTextCenter, Padding } from "../../../../styles/utils";
import { Row, Col, Progress, Button, Avatar } from "../../../lib";
import { HeroWrapper, HeroCell, HeroButtonLendMobile } from "./styled";

const HomeHero: React.FC = () => (
  <HeroWrapper>
    <HeroCell>
      <Container>
        <Row>
          <Col lg={5} md={4} sm="hidden" text="center">
            <img
              src={HeroIllustration}
              alt="HomeHero - Illustraion"
              width={300}
            />
          </Col>
          <Col lg={7} md={8} sm={12}>
            <h1>Enabling Opportunity</h1>
            <p>Extend a 60,000 Dai education loan to: </p>
            <Margin top={16}>
              <Avatar
                size="sm"
                circle={true}
                tooltip="Alex"
                style={{ position: "absolute" }}
              >
                <img src={avatarInes} alt="Avatar - Ines" />
              </Avatar>
              <Padding left={56}>
                <h5>Widya Imanesti</h5>
                <p>Jakarta - Indonesia</p>
                <p>
                  Ines is raising a 60,000 Dai loan to attend Cornell University
                  for a Masters in HR
                </p>
              </Padding>
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
              <Margin top={20}>
                <MobileTextCenter>
                  <Avatar size="sm" circle={true} tooltip="Alex">
                    <img src={avatarAlex} alt="Avatar - User" />
                  </Avatar>
                  <Avatar size="sm" circle={true} tooltip="Averie">
                    <img src={avatarAverie} alt="Avatar - User" />
                  </Avatar>
                  <Avatar size="sm" circle={true} tooltip="Brooke">
                    <img src={avatarBrooke} alt="Avatar - User" />
                  </Avatar>
                  <Avatar size="sm" circle={true} tooltip="Ivana">
                    <img src={avatarIvana} alt="Avatar - User" />
                  </Avatar>
                  <Avatar size="sm" circle={true} tooltip="Shamanta">
                    <img src={avatarShamanta} alt="Avatar - User" />
                  </Avatar>
                </MobileTextCenter>
              </Margin>
              <Margin top={16} bottom={24}>
                <MobileTextCenter>
                  <small>
                    <a href="/">Powered by 39 contributors</a>
                  </small>
                </MobileTextCenter>
              </Margin>
              <Row align="center">
                <Col lg={6} md={12} sm="hidden">
                  <Margin top={16}>
                    <Button color="purple" onClick={() => console.log("click")}>
                      Start lend now
                    </Button>
                  </Margin>
                </Col>
                <Col lg={4} md={12} sm={12}>
                  <MobileTextCenter>
                    <Margin top={16}>
                      <a href="/">See the video</a>
                    </Margin>
                  </MobileTextCenter>
                </Col>
              </Row>
              <HeroButtonLendMobile>
                <Button color="purple" onClick={() => console.log("click")}>
                  Start lend now
                </Button>
              </HeroButtonLendMobile>
            </Margin>
          </Col>
        </Row>
      </Container>
    </HeroCell>
  </HeroWrapper>
);

export default HomeHero;
