import React from "react";
import { Row, Col } from "../../../lib";
import { SocialList } from "./styled";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon
} from "react-share";

const SocialShare: React.FC = () => {
  return (
    <Row justify="flex-end">
      <Col lg={11} sm={12}>
        <h6>Share to social media</h6>
        <SocialList>
          <li>
            <FacebookShareButton
              url="https://www.ines.fund/"
              quote="Enabling opportunity"
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url="https://www.ines.fund/"
              title="Enabling opportunity - Ines is raising a 60,000 Dai loan to attend Cornell University for a master's degree in HR"
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </li>
          <li>
            <LinkedinShareButton
              url="https://www.ines.fund/"
              windowWidth={750}
              windowHeight={600}
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </li>
          <li>
            <TelegramShareButton
              url="https://www.ines.fund/"
              title="Enabling opportunity - Ines is raising a 60,000 Dai loan to attend Cornell University for a master's degree in HR"
            >
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
          </li>
          <li>
            <WhatsappShareButton
              url="https://www.ines.fund/"
              title="Enabling opportunity - Ines is raising a 60,000 Dai loan to attend Cornell University for a master's degree in HR"
              separator="::"
            >
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </li>
          <li>
            <RedditShareButton
              url="https://www.ines.fund/"
              title="Enabling opportunity - Ines is raising a 60,000 Dai loan to attend Cornell University for a master's degree in HR"
              windowWidth={660}
              windowHeight={460}
            >
              <RedditIcon size={32} round={true} />
            </RedditShareButton>
          </li>
        </SocialList>
      </Col>
    </Row>
  );
};

export default SocialShare;
