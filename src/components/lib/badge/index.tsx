import React from "react";
import BadgeWrapper from "./styled";

const Badge: React.FC = ({ children }) => (
  <BadgeWrapper>{children}</BadgeWrapper>
);

export default Badge;
