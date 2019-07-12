import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const SocialCreaditsWrapper = styled.div`
  padding: 100px 0;
  padding-bottom: 40px;
  border-bottom: 1px solid #e7ebf2;
  ${MaxWidth.md`
    padding: 80px 0;
  `}
  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

export { SocialCreaditsWrapper };
