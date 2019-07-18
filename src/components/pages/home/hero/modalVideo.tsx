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
    <Margin top={48}>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          title="Ines - Short video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/_b_YVrex0yI?autoplay=1`}
          frameBorder="0"
        />
      </div>
    </Margin>
  </React.Fragment>
);

export default ModalVideo;
