import React from "react";
import { CheckboxProps } from "./interface";
import { CheckboxWrapper, CheckboxStyle } from "./styled";

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  checked,
  ...props
}) => (
  <CheckboxWrapper>
    <CheckboxStyle
      id={id}
      name={name}
      checked={checked}
      type="checkbox"
      {...props}
    />
    <label htmlFor={id}>{label}</label>
  </CheckboxWrapper>
);

export default Checkbox;
