// Style of social credit
import styled from "styled-components";

const SocialCreditWrapper = styled.div`
  background-color: white;
  padding: 16px;
  border: 1px solid #e7ebf2;
  border-radius: 6px;
  margin-top: 16px;
  transition: all ease-in-out 0.4s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(78, 81, 144, 0.18);
  }
`;

const SocialCreditAvatar = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  img {
    border-radius: 40px;
    width: 40px;
    height: 40px;
  }
`;

const SocialCreditInfo = styled.div`
  padding-left: 56px;
  img {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export { SocialCreditWrapper, SocialCreditAvatar, SocialCreditInfo };
