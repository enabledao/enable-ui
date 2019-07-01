// Lib button component
import React from "react";
import { ButtonWrapper } from "./Styled";

const Button: React.FC<{ onClick: () => void }> = ({ onClick, children }) => (
  <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
);

export default Button;
