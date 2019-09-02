import styled from "styled-components";
import { MaxWidth } from "../../../../../styles/utils";

const CostBreakdownCard = styled.div`
  background-color: white;
  border-top: 2px solid #e7ebf2;
  padding: 16px;
  transition: all ease-in-out 0.4s;
  ${MaxWidth.sm`
    padding-top: 20px;
  `}
  &:last-child {
    background-color: #f7f7f7;
    color: black;
  }
`;

const CostBreakdownInline = styled.div`
  width: calc(100% / 3);
  display: inline-block;
  vertical-align: top;
  p {
    margin-bottom: 0;
  }
  &:last-child {
    text-align: right;
  }
  ${MaxWidth.sm`
    width: 100%;
    margin-bottom: 8px;
    &:last-child {
      text-align: left;
    }
  `}
`;

const CostBreakdownTitleWrapper = styled.div`
  padding: 16px;
  color: #6c6d7a;
`;

const CostBreakdownTitle = styled.div`
  width: calc(100% / 3);
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  ${MaxWidth.sm`
    display: none;
  `}
  &:last-child {
    text-align: right;
  }
`;

const CostBreakdownTitleMobile = styled.small`
  display: none;
  ${MaxWidth.sm`
    display: block;
    font-weight: 600;
  `}
`;

export {
  CostBreakdownCard,
  CostBreakdownInline,
  CostBreakdownTitleWrapper,
  CostBreakdownTitle,
  CostBreakdownTitleMobile
};
