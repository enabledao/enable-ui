import styled from "styled-components";
import { MaxWidth } from "../../../../styles/utils";

const ProfileWrapper = styled.div`
  padding: 100px 0;
  ${MaxWidth.md`
    padding: 80px 0;
  `}
  ${MaxWidth.sm`
    padding: 60px 0;
  `}
`;

const ProfileSocialLink = styled.a`
  + a {
    padding-left: 24px;
  }
`;

export { ProfileWrapper, ProfileSocialLink };
