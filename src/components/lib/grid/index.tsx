// Lib grid component
import React from "react";
import { RowProps, ColProps } from "./interface";
import { GridWrapper, ColWrapper } from "./Styled";

const Row: React.FC<RowProps> = ({ justify, align, text, children }) => {
  return (
    <GridWrapper justify={justify} align={align} text={text}>
      {children}
    </GridWrapper>
  );
};

const Col: React.FC<ColProps> = ({ lg, md, sm, xs, children }) => (
  <ColWrapper lg={lg} md={md} sm={sm} xs={xs}>
    {children}
  </ColWrapper>
);

export { Row, Col };
