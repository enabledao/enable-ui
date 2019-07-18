import React from "react";
import SocialIllustration from "../../../../../images/illustration/social-review.svg";
import CommentIcon from "../../../../../images/icons/comment.svg";
import { Margin, Padding } from "../../../../../styles/utils";
import { Row, Col } from "../../../../lib";
import TestimonialLinkedin from "./testimonial";

const SocialCredits: React.FC = () => (
  <Row>
    <Col lg={5} md={4} sm="hidden" text="center">
      <img src={SocialIllustration} alt="HomeHero - Illustraion" width={340} />
    </Col>
    <Col lg={7} md={8} sm={12}>
      <img
        src={CommentIcon}
        alt="Icon - Comment"
        width={34}
        style={{ position: "absolute" }}
      />
      <Padding left={48}>
        <h5>Things People Say</h5>
        <p>
          See what Ines' colleagues say about working with her in&nbsp;
          <a href="https://www.linkedin.com/in/widya-imanesti/" target="blank">
            Linkedin
          </a>
        </p>
      </Padding>
      <Margin vertical={32}>
        <TestimonialLinkedin />
      </Margin>
    </Col>
  </Row>
);

export default SocialCredits;
