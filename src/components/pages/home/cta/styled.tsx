import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const CtaWrapper = styled.div`
  background-image: linear-gradient(to top, #ffffff, #f6f7fb);
  ${MaxWidth.sm`
    display: none;
  `}
`;

const CtaContent = styled.div`
  padding: 100px 0;
  border-top: 1px solid #e7ebf2;
  ${MaxWidth.md`
    padding: 80px 0;
  `}
  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

export { CtaWrapper, CtaContent };
