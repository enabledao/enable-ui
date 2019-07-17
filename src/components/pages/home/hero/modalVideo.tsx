import React from "react";
import { Margin, Padding } from "../../../../styles/utils";
import VideoIcon from "../../../../images/icons/video.svg";

const ModalVideo: React.FC = () => (
  <React.Fragment>
    <img
      src={VideoIcon}
      alt="Icon - List"
      width={34}
      style={{ position: "absolute" }}
    />
    <Padding left={48}>
      <h4>Short video about Ines</h4>
    </Padding>
    <Margin top={24}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
        provident laudantium ratione atque! Impedit autem velit illum dolore ad
        unde, porro a nostrum dolorem modi laboriosam suscipit consequatur
        temporibus iure.
      </p>
    </Margin>
  </React.Fragment>
);

export default ModalVideo;
