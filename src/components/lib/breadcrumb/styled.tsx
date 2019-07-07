import styled, { css } from "styled-components";
import { BreadcrumbStyle } from "./interface";

const BreadcrumbWrapper = styled.div<BreadcrumbStyle>`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 4px solid #e7ebf2;
  ${props =>
    props.step &&
    css`
      width: calc(100% / ${props.step} - 24px);
      display: inline-block;
      margin-right: 24px;
      &:last-child {
        margin-right: 0;
      }
    `}

  ${props =>
    props.active &&
    css`
      border-bottom: 4px solid #36b37e;
    `}
`;

export { BreadcrumbWrapper };
