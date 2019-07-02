import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { Row, Col } from "../../../lib";
import SocialIllustration from "../../../../images/illustration/social-review.svg";
import { SocialCreaditsWrapper, SocialCreaditsContent } from "./Styled";
import TestimonialLinkedin from "./testimonialLinkedin";

const SocialCredits: React.FC = () => (
  <SocialCreaditsWrapper>
    <Container>
      <SocialCreaditsContent>
        <Row>
          <Col lg={5} md={4} sm={12} text="center">
            <img
              src={SocialIllustration}
              alt="HomeHero - Illustraion"
              width={300}
            />
          </Col>
          <Col lg={7} md={8} sm={12}>
            <h1>Things People Say</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Margin vertical={32}>
              <TestimonialLinkedin />
            </Margin>
          </Col>
        </Row>
      </SocialCreaditsContent>
    </Container>
  </SocialCreaditsWrapper>
);

export default SocialCredits;
