import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const RepaymentWrapper = styled.div``;

const RepaymentCard = styled.div`
  background-color: white;
  border: 1px solid #e7ebf2;
  margin-top: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all ease-in-out 0.4s;
  &:hover {
    box-shadow: rgba(78, 81, 144, 0.18) 0px 4px 8px 0px;
  }
  ${MaxWidth.sm`
    padding-top: 20px;
  `}
  &:nth-child(even) {
    background-color: #f6f7fb;
  }
  &:last-child {
    background-color: #76bbe3;
    color: white;
    small {
      display: none;
    }
  }
`;

const RepaymentInline = styled.div`
  width: calc(100% / 3);
  display: inline-block;
  p {
    margin-bottom: 0;
  }
  ${MaxWidth.sm`
    width: calc(100% / 2);
    margin-bottom: 8px;
  `}
`;

const RepaymentTitleWrapper = styled.div`
  padding: 0 16px;
`;

const RepaymentTitle = styled.div`
  width: calc(100% / 3);
  display: inline-block;
  ${MaxWidth.sm`
    display: none;
  `}
`;

const RepaymentTitleMobile = styled.small`
  display: none;
  ${MaxWidth.sm`
    display: block;
    font-weight: 600;
  `}
`;

export {
  RepaymentWrapper,
  RepaymentCard,
  RepaymentInline,
  RepaymentTitleWrapper,
  RepaymentTitle,
  RepaymentTitleMobile
};
