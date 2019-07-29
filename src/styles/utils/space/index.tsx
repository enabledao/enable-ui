import React from "react";
import { SizeProps } from "./interface";
import { MarginWrapper, PaddingWrapper } from "./styled";

const Margin: React.FC<SizeProps> = ({
  all,
  top,
  right,
  bottom,
  left,
  vertical,
  horizontal,
  children
}) => {
  return (
    <MarginWrapper
      all={all}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      vertical={vertical}
      horizontal={horizontal}
    >
      {children}
    </MarginWrapper>
  );
};

// Padding utils
const Padding: React.FC<SizeProps> = ({
  all,
  top,
  right,
  bottom,
  left,
  vertical,
  horizontal,
  children
}) => {
  return (
    <PaddingWrapper
      all={all}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      vertical={vertical}
      horizontal={horizontal}
    >
      {children}
    </PaddingWrapper>
  );
};

export { Margin, Padding };
