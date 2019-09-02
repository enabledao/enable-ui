import React from "react";
import { Margin } from "../../../../styles/utils";

const ModalVideo: React.FC = () => (
  <React.Fragment>
    <h4>Short video about Ines</h4>
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
          src={`https://www.youtube.com/embed/s7oGAs4AkJg?autoplay=1`}
          frameBorder="0"
        />
      </div>
    </Margin>
  </React.Fragment>
);

export default ModalVideo;
