import styled from "styled-components";
import { MaxWidth } from "../../../styles/utils";

const FaucetWrapper = styled.div`
  padding: 100px 0;
  background-image: linear-gradient(to bottom, #ffffff, #f6f7fb);
  ${MaxWidth.md`
    padding: 80px 0;
  `}

  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

const FaucetBox = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid #e7ebf2;
  padding: 24px;
`;

const FaucetActionMobile = styled.div`
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

export { FaucetWrapper, FaucetActionMobile, FaucetBox };
