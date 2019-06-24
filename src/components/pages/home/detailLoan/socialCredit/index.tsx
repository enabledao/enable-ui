// Pages social credit component
import React from "react";
import ShamantaAva from "../../../../../images/avatar/shamanta.jpg";
import AlexAva from "../../../../../images/avatar/alex.jpg";
import Linkedin from "../../../../../images/socialMedia/linkedin.svg";
import { Margin } from "../../../../../styles/utils";
import {
  SocialCreditWrapper,
  SocialCreditAvatar,
  SocialCreditInfo
} from "./Styled";

const SocialCredit: React.FC = () => (
  <React.Fragment>
    <h5>Social Credit</h5>
    <p>2 people have recommended Ines</p>
    <SocialCreditWrapper>
      <SocialCreditAvatar>
        <img src={ShamantaAva} alt="Avatar - Shamanta" />
      </SocialCreditAvatar>
      <SocialCreditInfo>
        <img src={Linkedin} alt="Socila - Media" width={16} />
        <h6>Shamanta</h6>
        <small>
          <p>Colleague</p>
          <p>0x129391823...</p>
        </small>
      </SocialCreditInfo>
    </SocialCreditWrapper>
    <SocialCreditWrapper>
      <SocialCreditAvatar>
        <img src={AlexAva} alt="Avatar - Alex" />
      </SocialCreditAvatar>
      <SocialCreditInfo>
        <img src={Linkedin} alt="Socila - Media" width={16} />
        <h6>Alex Shawn</h6>
        <small>
          <p>Colleague</p>
          <p>0x129391786...</p>
        </small>
      </SocialCreditInfo>
    </SocialCreditWrapper>
    <Margin top={24}>
      <a href="/">See more ...</a>
    </Margin>
  </React.Fragment>
);

export default SocialCredit;
