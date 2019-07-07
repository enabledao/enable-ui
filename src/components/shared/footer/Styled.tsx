// Style of footer component
import styled from "styled-components";
import { MaxWidth } from "../../../styles/utils";

const FooterWrapper = styled.div`
  padding: 24px 0;
  border-top: 1px solid #e7ebf2;
  background-color: #262626;
  color: white;
  ${MaxWidth.sm`
    padding-bottom: 120px;
  `}
`;

export default FooterWrapper;
