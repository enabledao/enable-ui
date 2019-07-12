import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin, Padding } from "../../../../styles/utils";
import { Row, Col } from "../../../lib";
import SocialIllustration from "../../../../images/illustration/social-review.svg";
import commentIcon from "../../../../images/icons/comment.svg";
import { SocialCreaditsWrapper } from "./styled";
import TestimonialLinkedin from "./testimonial";

const SocialCredits: React.FC = () => (
  <Container>
    <SocialCreaditsWrapper>
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
          <p>
            See what Ines' colleagues say about working with her in{" "}
            <a
              href="https://www.linkedin.com/in/widya-imanesti/"
              target="blank"
            >
              Linkedin
            </a>
          </p>
          <Margin vertical={32}>
            <TestimonialLinkedin />
          </Margin>
        </Col>
      </Row>
    </SocialCreaditsWrapper>
  </Container>
);

export default SocialCredits;
