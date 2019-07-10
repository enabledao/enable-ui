import React from "react";
import { BreadcrumbProps } from "./interface";
import { BreadcrumbWrapper } from "./styled";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ step, data }) => (
  <React.Fragment>
    {data.map((res, index) => (
      <BreadcrumbWrapper key={index} step={data.length} active={res.active}>
        <h6>Step {index + 1}</h6>
        <p>{res.title}</p>
      </BreadcrumbWrapper>
    ))}
  </React.Fragment>
);

export default Breadcrumb;
