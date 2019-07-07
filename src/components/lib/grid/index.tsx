// Lib grid component
import React from "react";
import { RowProps, ColProps } from "./interface";
import { GridWrapper, ColWrapper } from "./styled";

const Row: React.FC<RowProps> = ({ justify, align, text, children }) => {
  return (
    <GridWrapper justify={justify} align={align} text={text}>
      {children}
    </GridWrapper>
  );
};

const Col: React.FC<ColProps> = ({ lg, md, sm, xs, text, children }) => (
  <ColWrapper lg={lg} md={md} sm={sm} xs={xs} text={text}>
    {children}
  </ColWrapper>
);

export { Row, Col };
