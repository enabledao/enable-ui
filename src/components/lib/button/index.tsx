import React from "react";
import { ButtonWrapper } from "./styled";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({ type, onClick, color, children }) => (
  <ButtonWrapper type={type ? type : "button"} onClick={onClick} color={color}>
    {children}
  </ButtonWrapper>
);

export default Button;
