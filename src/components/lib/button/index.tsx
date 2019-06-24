// Lib button component
import React from "react";
import { ButtonWrapper } from "./Styled";

const Button: React.FC = ({ children }) => (
  <ButtonWrapper>{children}</ButtonWrapper>
);

export default Button;
