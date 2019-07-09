import React from "react";
import { FieldErrorWrapper } from "./styled";

const FieldError: React.FC = ({ children }) => (
  <FieldErrorWrapper>{children}</FieldErrorWrapper>
);

export default FieldError;
