// Style utils of grid, row and col
import styled, { css } from "styled-components";
import { MaxWidth } from "../../../styles/utils";
import { RowProps, ColProps } from "./interface";

const GridWrapper = styled.div<RowProps>`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-right: -16px;
  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
    `};

  ${props =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `};

  ${props =>
    props.text &&
    css`
      text-align: ${props.text};
    `};
`;

const ColWrapper = styled.div<ColProps>`
  padding: 8px 16px;
  ${props =>
    props.lg &&
    css`
      display: inline-block;
      flex-basis: unset;
      width: ${props.lg ? `${(props.lg / 12) * 100}%` : null};
      ${props.lg === "hidden" &&
        css`
          display: none;
        `};
    };
  `};

  ${props =>
    props.md &&
    css`
      ${MaxWidth.md`
        display: inline-block;
        flex-basis: unset;
        width: ${props.md ? `${(props.md / 12) * 100}%` : null};
        ${props.md === "hidden" &&
          css`
            display: none;
          `};
      `};
    `};

  ${props =>
    props.sm &&
    css`
      ${MaxWidth.sm`
        display: inline-block;
        flex-basis: unset;
        width: ${props.sm ? `${(props.sm / 12) * 100}%` : null};
        ${props.sm === "hidden" &&
          css`
            display: none;
          `};
      `};
    `};

  ${props =>
    props.xs &&
    css`
      ${MaxWidth.xs`
        display: inline-block;
        flex-basis: unset;
        width: ${props.xs ? `${(props.xs / 12) * 100}%` : null};
        ${props.xs === "hidden" &&
          css`
            display: none;
          `};
      `};
    `};
`;

export { GridWrapper, ColWrapper };
