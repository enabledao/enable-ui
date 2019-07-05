import styled, { css } from "styled-components";
import { AvatarProps } from "./interface";

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const AvatarBox = styled.div<AvatarProps>`
  width: 64px;
  height: 64px;
  margin-right: -8px;
  border: 2px solid white;
  ${props =>
    props.size === "sm" &&
    css`
      width: 48px;
      height: 48px;
    `}
  ${props =>
    props.size === "lg" &&
    css`
      width: 80px;
      height: 80px;
    `}
  ${props =>
    props.circle &&
    css`
      border-radius: 100px;
      overflow: hidden;
    `}
`;

const AvatarTooltip = styled.span`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: black;
  padding: 8px 16px;
  color: white;
  z-index: 4;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  transition: all ease-in-out 0.4s;
  width: 200px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${AvatarWrapper}:hover & {
    display: block;
    opacity: 1;
    visibility: visible;
  }
`;

export { AvatarWrapper, AvatarBox, AvatarTooltip };
