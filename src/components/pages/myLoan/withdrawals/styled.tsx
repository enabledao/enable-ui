import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const WithdrawalBox = styled.div`
  background-color: white;
`;

const WithdrawalActionMobile = styled.div`
  display: none;
  ${MaxWidth.sm`
    display: block;
    position: fixed;
    bottom: 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-top: 1px solid #e7ebf2;
    width: 100%;
    left: 0;
    z-index: 4;
  `}
`;

export { WithdrawalBox, WithdrawalActionMobile };
