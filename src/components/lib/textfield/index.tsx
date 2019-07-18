import React from "react";
import { TextFieldProps } from "./interface";
import { InputWrapper, InputLabel } from "./styled";

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  type,
  label,
  autoFocus,
  id,
  onChangeCustom,
  ...props
}) => (
  <React.Fragment>
    {label && <InputLabel>{label}</InputLabel>}
    <InputWrapper
      {...props}
      id={id}
      type={type ? type : "text"}
      placeholder={placeholder}
      autoFocus={autoFocus}
      name={props.name}
      onChange={e => {
        props.onChange(e);
        if (onChangeCustom) {
          onChangeCustom(e);
        }
      }}
    />
  </React.Fragment>
);

export default TextField;
