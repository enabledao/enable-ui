// Lib react component
import React from "react";
import { AvatarProps } from "./interface";
import { AvatarWrapper, AvatarBox, AvatarTooltip } from "./Styled";

const Avatar: React.FC<AvatarProps> = ({ circle, size, hover, children }) => (
  <AvatarWrapper>
    <AvatarBox circle={circle} size={size} hover={hover}>
      {children}
    </AvatarBox>
    {hover && <AvatarTooltip>{hover}</AvatarTooltip>}
  </AvatarWrapper>
);

export default Avatar;
