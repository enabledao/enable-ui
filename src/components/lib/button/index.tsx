// Lib button component
import React from "react";
import { ButtonWrapper } from "./styled";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({ onClick, color, children }) => (
  <ButtonWrapper onClick={onClick} color={color}>
    {children}
  </ButtonWrapper>
);

export default Button;
