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
  allowMultipleExpanded?: boolean;
  defaultExpandedAll?: boolean;
}

export interface AccordionState {
  expanded: number;
}

class Accordion extends React.Component<AccordionProps, AccordionState> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      expanded: 0
    };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand = (index: number) => {
    const { expanded } = this.state;
    const current = expanded === index ? expanded : index;
    this.setState(() => ({ expanded: current }));
  };

  render() {
    const { data, allowMultipleExpanded, defaultExpandedAll } = this.props;
    const { expanded } = this.state;
    return (
      <React.Fragment>
        {allowMultipleExpanded ? (
          <React.Fragment>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <AccordionList
                  {...item}
                  index={index}
                  defaultExpandedAll={defaultExpandedAll}
                />
              </React.Fragment>
            ))}
          </React.Fragment>
        ) : (
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
        )}
      </React.Fragment>
    );
  }
}

export interface AccordionListProps {
  title: string;
  content: string;
  allowMultipleExpanded?: boolean;
  defaultExpandedAll?: boolean;
}

export interface AccordionListState {
  expanded: boolean;
}

// tslint:disable-next-line: max-classes-per-file
class AccordionList extends React.Component<
  AccordionListProps,
  AccordionListState
> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.defaultExpandedAll ? props.defaultExpandedAll : false
    };
  }

  render() {
    const { title, content } = this.props;
    const { expanded } = this.state;
    return (
      <AccordionWrapper onClick={() => this.setState({ expanded: !expanded })}>
        <AccordionIcon activeStyle={expanded} src={chevron} width={24} />
        <AccordionTitle>
          <h6>{title}</h6>
        </AccordionTitle>
        {expanded && (
          <AccordionDesc>
            <p>{content}</p>
          </AccordionDesc>
        )}
      </AccordionWrapper>
    );
  }
}

export default Accordion;
