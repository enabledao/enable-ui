// Style of textfield
import styled from "styled-components";

const InputWrapper = styled.input`
  padding: 4px 12px;
  outline: none;
  border-radius: 2px;
  border: 1px solid #e7ebf2;
  min-height: 38px;
  font-size: 14px;
  width: 100%;
  &:focus,
  &:active {
  }
`;

export { InputWrapper };
