// Lib textfield component
import React from "react";
import { TextFieldProps } from "./interface";
import { InputWrapper, InputLabel } from "./styled";

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  type,
  label,
  autoFocus
}) => (
  <React.Fragment>
    {label && <InputLabel>{label}</InputLabel>}
    <InputWrapper
      type={type ? type : "text"}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  </React.Fragment>
);

export default TextField;
