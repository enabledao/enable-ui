import React from "react";
import CommentIcon from "../../../../../images/icons/comment.svg";
import { Margin, Padding } from "../../../../../styles/utils";
import { Row, Col } from "../../../../lib";
import TestimonialLinkedin from "./testimonial";
import SocialIllustration from "../../../../../images/illustration/social-review.svg";
import NoteOne from "../../../../../images/notes/one.jpg";
import NoteTwo from "../../../../../images/notes/two.jpg";
import NoteThree from "../../../../../images/notes/three.jpg";
import NoteFour from "../../../../../images/notes/four.jpg";

const SocialCredits: React.FC = () => (
  <Row>
    <Col lg={8} md={8} sm={12}>
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
    <Col lg={4} md={4} sm="hidden" text="center">
      <Margin top={48}>
        <img
          src={SocialIllustration}
          alt="HomeHero - Illustraion"
          width={340}
        />
      </Margin>
      <Margin top={48}>
        <Margin bottom={32}>
          <h6>Notes from colleague</h6>
        </Margin>
        <Margin bottom={16}>
          <img src={NoteOne} alt="Notes - One" width={300} />
        </Margin>
        <Margin bottom={16}>
          <img src={NoteTwo} alt="Notes - Two" width={300} />
        </Margin>
        <Margin bottom={16}>
          <img src={NoteThree} alt="Notes - Three" width={300} />
        </Margin>
        <Margin bottom={16}>
          <img src={NoteFour} alt="Notes - Four" width={300} />
        </Margin>
      </Margin>
    </Col>
  </Row>
);

export default SocialCredits;
