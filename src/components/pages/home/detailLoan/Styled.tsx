// Style of detail loan
import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const DetailLoan = styled.div`
  padding-top: 260px;
  padding-bottom: 80px;
  position: relative;
  ${MaxWidth.md`
    padding-top: 320px;
  `}
  ${MaxWidth.sm`
    padding-top: 340px;
  `}
`;

const DetailLoanLeft = styled.div`
  padding-right: 48px;
  border-right: 1px solid #e7ebf2;
  ${MaxWidth.sm`
    padding-right: 0;
    border-right: none;
    border-bottom: 1px solid #e7ebf2;
    padding-bottom: 48px;
    margin-bottom: 32px;
  `}
`;

const DetailLoanSocial = styled.div`
  position: absolute;
  top: 0;
  right: 48px;
  a {
    margin-right: 16px;
  }
  ${MaxWidth.sm`
    position: relative;
    left: 0;
    margin-top: 16px;
  `}
`;

const RenderDesktop = styled.div`
  ${MaxWidth.sm`
    display: none;
  `}
`;

const RenderMobile = styled.div`
  display: none;
  ${MaxWidth.sm`
    display: block;
  `}
`;

export {
  DetailLoan,
  DetailLoanLeft,
  DetailLoanSocial,
  RenderDesktop,
  RenderMobile
};
