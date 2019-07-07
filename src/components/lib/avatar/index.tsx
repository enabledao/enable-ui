// Lib react component
import React from "react";
import { AvatarProps } from "./interface";
import { AvatarWrapper, AvatarBox, AvatarTooltip } from "./styled";

const Avatar: React.FC<AvatarProps> = ({
  circle,
  size,
  tooltip,
  style,
  children
}) => (
  <AvatarWrapper>
    <AvatarBox circle={circle} size={size} tooltip={tooltip} style={style}>
      {children}
    </AvatarBox>
    {tooltip && <AvatarTooltip>{tooltip}</AvatarTooltip>}
  </AvatarWrapper>
);

export default Avatar;
