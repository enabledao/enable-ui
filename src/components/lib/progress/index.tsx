import React from "react";
import { ProgressWrapper } from "./styled";

const Progress: React.FC<{ current: number }> = ({ current }) => (
  <ProgressWrapper current={current} />
);

export default Progress;
