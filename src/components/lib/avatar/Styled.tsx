import styled, { css } from "styled-components";
import { AvatarProps } from "./interface";

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const AvatarBox = styled.div<AvatarProps>`
  width: 56px;
  height: 56px;
  margin-right: -8px;
  border: 4px solid white;
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

const AvatarTooltip = styled.span<AvatarProps>`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: black;
  padding: 8px 16px;
  color: white;
  z-index: 4;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  transition: all ease-in-out 0.4s;
  ${props =>
    props.size === "sm" &&
    css`
      top: 48px;
    `}
  ${props =>
    props.size === "lg" &&
    css`
      top: 80px;
    `}
  &:before {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid black;
    content: "";
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
  }
  ${AvatarWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export { AvatarWrapper, AvatarBox, AvatarTooltip };
