// Lib badge component
import React from "react";
import BadgeWrapper from "./Styled";

const Badge: React.FC = ({ children }) => (
  <BadgeWrapper>{children}</BadgeWrapper>
);

export default Badge;
