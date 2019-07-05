// Lib react component
import React from "react";
import { AvatarProps } from "./interface";
import { AvatarWrapper, AvatarBox, AvatarTooltip } from "./Styled";

const Avatar: React.FC<AvatarProps> = ({ circle, size, tooltip, children }) => (
  <AvatarWrapper>
    <AvatarBox circle={circle} size={size} tooltip={tooltip}>
      {children}
    </AvatarBox>
    {tooltip && <AvatarTooltip>{tooltip}</AvatarTooltip>}
  </AvatarWrapper>
);

export default Avatar;
