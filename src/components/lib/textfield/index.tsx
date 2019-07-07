// Lib textfield component
import React from "react";
import { TextFieldProps } from "./interface";
import { InputWrapper } from "./styled";

const TextField: React.FC<TextFieldProps> = ({ placeholder, type }) => (
  <InputWrapper type={type ? type : "text"} placeholder={placeholder} />
);

export default TextField;
