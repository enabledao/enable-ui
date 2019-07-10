import styled from "styled-components";
import { MaxWidth } from "../../../styles/utils";

const ErrorWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
  ${MaxWidth.md`
    padding: 80px 0;
  `}

  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

export { ErrorWrapper };
