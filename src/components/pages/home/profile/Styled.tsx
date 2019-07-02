import styled from "styled-components";

const ProfileWrapper = styled.div`
  padding: 80px 0;
`;

const ProfileSocialLink = styled.a`
  + a {
    padding-left: 24px;
  }
  > img {
    transition: all ease-in-out 0.4s;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.4;
  }
  &:hover {
    > img {
      filter: none;
      opacity: 1;
    }
  }
`;

export { ProfileWrapper, ProfileSocialLink };
