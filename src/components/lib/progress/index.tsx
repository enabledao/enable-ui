// Lib progress component
import React from "react";
import { ProgressWrapper } from "./Styled";

const Progress: React.FC<{ current: number }> = ({ current }) => (
  <ProgressWrapper current={current} />
);

export default Progress;
