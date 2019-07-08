// Lib textfield component
import React from "react";
import { TextFieldProps } from "./interface";
import { InputWrapper, InputLabel } from "./styled";

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  type,
  label,
  autoFocus,
  id,
  ...props
}) => (
  <React.Fragment>
    {label && <InputLabel>{label}</InputLabel>}
    <InputWrapper
      id={id}
      type={type ? type : "text"}
      placeholder={placeholder}
      autoFocus={autoFocus}
      name={props.name}
      {...props}
    />
  </React.Fragment>
);

export default TextField;
