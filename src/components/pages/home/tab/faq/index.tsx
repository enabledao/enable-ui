import React from "react";
import { Accordion, Row, Col } from "../../../../lib";
import { Margin, Padding } from "../../../../../styles/utils";
import QuestionIcon from "../../../../../images/icons/question.svg";

const dataAccordionLeft = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem, pariatur expedita molestias laborum ad atque, porro perspiciatis modi quaerat quam ea! Earum sapiente nemo aperiam iusto omnis quaerat corporis?"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem, pariatur expedita molestias laborum ad atque, porro perspiciatis modi quaerat quam ea! Earum sapiente nemo aperiam iusto omnis quaerat corporis?"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem, pariatur expedita molestias laborum ad atque, porro perspiciatis modi quaerat quam ea! Earum sapiente nemo aperiam iusto omnis quaerat corporis?"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem, pariatur expedita molestias laborum ad atque, porro perspiciatis modi quaerat quam ea! Earum sapiente nemo aperiam iusto omnis quaerat corporis?"
  }
];

const dataAccordionRight = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem, pariatur expedita molestias laborum ad atque, porro perspiciatis modi quaerat quam ea! Earum sapiente nemo aperiam iusto omnis quaerat corporis?"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem, pariatur expedita molestias laborum ad atque, porro perspiciatis modi quaerat quam ea! Earum sapiente nemo aperiam iusto omnis quaerat corporis?"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem, pariatur expedita molestias laborum ad atque, porro perspiciatis modi quaerat quam ea! Earum sapiente nemo aperiam iusto omnis quaerat corporis?"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem, pariatur expedita molestias laborum ad atque, porro perspiciatis modi quaerat quam ea! Earum sapiente nemo aperiam iusto omnis quaerat corporis?"
  }
];

const FaqTab: React.FC = () => {
  return (
    <React.Fragment>
      <img
        src={QuestionIcon}
        alt="Icon - Tick Paper Icon"
        width={34}
        style={{ position: "absolute" }}
      />
      <Padding left={48}>
        <h5>FAQ</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Padding>
      <Margin top={32}>
        <Row>
          <Col lg={6} sm={12}>
            <Accordion
              data={dataAccordionLeft}
              allowMultipleExpanded={true}
              defaultExpandedAll={true}
            />
          </Col>
          <Col lg={6} sm={12}>
            <Accordion
              data={dataAccordionRight}
              allowMultipleExpanded={true}
              defaultExpandedAll={true}
            />
          </Col>
        </Row>
      </Margin>
    </React.Fragment>
  );
};

export default FaqTab;
