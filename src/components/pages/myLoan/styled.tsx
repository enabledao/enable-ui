import styled from "styled-components";
import { MaxWidth } from "../../../styles/utils";

const MyLoanWrapper = styled.div`
  padding: 100px 0;
  background-image: linear-gradient(to bottom, #ffffff, #f6f7fb);
  ${MaxWidth.md`
    padding: 80px 0;
  `}

  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

export { MyLoanWrapper };
