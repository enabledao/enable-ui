// Pages hero home component
import React from "react";
import InesAva from "../../../../images/avatar/ines.jpeg";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { Badge, Button, Progress, Row, Col } from "../../../lib";
import {
  HomeHero,
  HomeLoanWrapper,
  HomeAva,
  HomeLoanBox,
  HomeLoanShortProfile,
  HomeBadge,
  HomeDesc,
  HomeBoxInfo
} from "./Styled";

const HomeHeroLoan: React.FC = () => (
  <HomeHero>
    <Container>
      <h1>Make change happen</h1>
      <p>
        Donate to project to help Widya Imanesti attend Corner University for a
        Master in Human resources
      </p>
      <Row justify="center">
        <Col lg={8} md={10} sm={12} text="left">
          <HomeLoanWrapper>
            <HomeLoanBox>
              <div style={{ position: "absolute" }}>
                <HomeAva src={InesAva} alt="Avatar - Ines" />
              </div>
              <HomeLoanShortProfile>
                <h5>Widya Imanesti</h5>
                <p>Jakarta - Indonesia</p>
                <HomeBadge>
                  <Badge>Education</Badge>
                </HomeBadge>
              </HomeLoanShortProfile>
              <HomeBoxInfo>
                <HomeDesc>
                  <p>
                    Hi, my name is Widya Imanesti but my nickname is Ines. I
                    studied Industrial Engineering at Institut Teknologi
                    Bandung, ranked #1 best university in Indonesia. I graduated
                    circa 2009 and have been pursuing my career in Human
                    Resources ever since.
                  </p>
                </HomeDesc>
                <Margin top={16}>
                  <Margin top={24}>
                    <Progress current={40} />
                  </Margin>
                  <Margin top={16} bottom={24}>
                    <small>
                      <a href="/">Powered by 39 contributors</a>
                    </small>
                  </Margin>
                  <Row>
                    <Col lg={3} md={6}>
                      <h4>2,900</h4>
                      <small>Dai Raised 0f 60,000 goals</small>
                    </Col>
                    <Col lg={3} md={6}>
                      <h4>6%</h4>
                      <small>Interest per anum</small>
                    </Col>
                    <Col lg={3} md={6}>
                      <h4>12</h4>
                      <small>Month of loan priode</small>
                    </Col>
                    <Col lg={3} md={6}>
                      <h4>29</h4>
                      <small>Days left</small>
                    </Col>
                  </Row>
                  <Margin top={32}>
                    <Button>Lend</Button>
                  </Margin>
                </Margin>
              </HomeBoxInfo>
            </HomeLoanBox>
          </HomeLoanWrapper>
        </Col>
      </Row>
    </Container>
  </HomeHero>
);

export default HomeHeroLoan;
