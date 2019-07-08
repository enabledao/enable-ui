import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const SocialCreaditsWrapper = styled.div`
  background-image: linear-gradient(to bottom, #ffffff, #f6f7fb);
`;

const SocialCreaditsContent = styled.div`
  padding: 100px 0;
  padding-bottom: 40px;
  border-top: 1px solid #e7ebf2;
  border-bottom: 1px solid #e7ebf2;
  ${MaxWidth.md`
    padding: 80px 0;
  `}
  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

export { SocialCreaditsWrapper, SocialCreaditsContent };
