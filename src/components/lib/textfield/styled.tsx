// Style of textfield
import styled, { css } from "styled-components";
import { TextFieldProps } from "./interface";

const InputWrapper = styled.input<TextFieldProps>`
  padding: 4px 12px;
  outline: none;
  border-radius: 2px;
  border: 1px solid #e7ebf2;
  min-height: 38px;
  font-size: 14px;
  width: 100%;
  transition: all ease-in-out 0.4s;
  &:focus,
  &:active {
    border: 1px solid #76bbe3;
  }
  ${props =>
    props.error &&
    (props.touched &&
      css`
        border: 1px solid #b72814;
      `)}
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export { InputWrapper, InputLabel };
