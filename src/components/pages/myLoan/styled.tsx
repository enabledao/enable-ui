import styled from "styled-components";
import { MaxWidth } from "../../../styles/utils";

const MyLoanWrapper = styled.div`
  padding: 100px 0;
  min-height: calc(100vh - (70px + 60px));
  ${MaxWidth.md`
    padding: 80px 0;
  `}

  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

export { MyLoanWrapper };
