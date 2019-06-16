import styled, { css } from "styled-components";
import { SizeProps } from "./interface";

// Style utils of margin
const MarginWrapper = styled.div<SizeProps>`
  ${props =>
    props.all &&
    css`
      margin: ${props.all}px;
    `}

  ${props =>
    props.top &&
    css`
      margin-top: ${props.top}px;
    `}

  ${props =>
    props.right &&
    css`
      margin-right: ${props.right}px;
    `}

  ${props =>
    props.bottom &&
    css`
      margin-bottom: ${props.bottom}px;
    `}

  ${props =>
    props.left &&
    css`
      margin-left: ${props.left}px;
    `}

  ${props =>
    props.vertical &&
    css`
      margin-top: ${props.vertical}px;
      margin-bottom: ${props.vertical}px;
    `}
    
  ${props =>
    props.horizontal &&
    css`
      margin-left: ${props.horizontal}px;
      margin-right: ${props.horizontal}px;
    `}
`;

// Style utils of padding
const PaddingWrapper = styled.div<SizeProps>`
  ${props =>
    props.all &&
    css`
      padding: ${props.all}px;
    `}

  ${props =>
    props.top &&
    css`
      padding-top: ${props.top}px;
    `}

  ${props =>
    props.right &&
    css`
      padding-right: ${props.right}px;
    `}

  ${props =>
    props.bottom &&
    css`
      padding-bottom: ${props.bottom}px;
    `}

  ${props =>
    props.left &&
    css`
      padding-left: ${props.left}px;
    `}

  ${props =>
    props.vertical &&
    css`
      padding-top: ${props.vertical}px;
      padding-bottom: ${props.vertical}px;
    `}

  ${props =>
    props.horizontal &&
    css`
      padding-left: ${props.horizontal}px;
      padding-right: ${props.horizontal}px;
    `}
`;

export { MarginWrapper, PaddingWrapper };
