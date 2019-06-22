// Style of detail loan
import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const DetailLoan = styled.div`
  padding: 260px 0;
  position: relative;
  ${MaxWidth.md`
    padding: 320px 0;
  `}
  ${MaxWidth.sm`
    padding: 340px 0;
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

export { DetailLoan, DetailLoanLeft, DetailLoanSocial };
