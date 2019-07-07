import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin, Padding } from "../../../../styles/utils";
import { Row, Col } from "../../../lib";
import SocialIllustration from "../../../../images/illustration/social-review.svg";
import commentIcon from "../../../../images/icons/comment.svg";
import { SocialCreaditsWrapper, SocialCreaditsContent } from "./styled";
import TestimonialLinkedin from "./testimonialLinkedin";

const SocialCredits: React.FC = () => (
  <SocialCreaditsWrapper>
    <Container>
      <SocialCreaditsContent>
        <Row>
          <Col lg={5} md={4} sm="hidden" text="center">
            <img
              src={SocialIllustration}
              alt="HomeHero - Illustraion"
              width={340}
            />
          </Col>
          <Col lg={7} md={8} sm={12}>
            <img
              src={commentIcon}
              alt="Icon - Comment"
              width={34}
              style={{ position: "absolute" }}
            />
            <Padding left={48}>
              <h2>Things People Say</h2>
            </Padding>
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
