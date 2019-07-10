// Lib accordion component
import React from "react";
import chevron from "../../../images/icons/chevron-bottom.svg";
import {
  AccordionWrapper,
  AccordionTitle,
  AccordionDesc,
  AccordionIcon
} from "./styled";

export interface AccordionProps {
  data: any[];
}

export interface AccordionState {
  expanded: number;
}

class Accordion extends React.Component<AccordionProps, AccordionState> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = { expanded: 0 };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand = (index: number) => {
    const { expanded } = this.state;
    const current = expanded === index ? expanded : index;
    this.setState(() => ({ expanded: current }));
  };

  render() {
    const { data } = this.props;
    const { expanded } = this.state;
    return (
      <React.Fragment>
        {data.map((res, index) => (
          <AccordionWrapper
            key={res.title}
            onClick={() => this.handleExpand(index)}
          >
            <AccordionIcon
              activeStyle={expanded === index}
              src={chevron}
              width={24}
            />
            <AccordionTitle>
              <h6>{res.title}</h6>
            </AccordionTitle>
            {expanded === index && (
              <AccordionDesc>
                <p>{res.content}</p>
              </AccordionDesc>
            )}
          </AccordionWrapper>
        ))}
      </React.Fragment>
    );
  }
}

export default Accordion;
