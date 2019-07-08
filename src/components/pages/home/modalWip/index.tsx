import React from "react";
import announcementIcon from "../../../../images/icons/announcement.svg";
import { Margin, Padding } from "../../../../styles/utils";
import { ModalWipWrapper } from "./styled";

class ModalWip extends React.Component<{}, {}> {
  render() {
    return (
      <React.Fragment>
        <img
          src={announcementIcon}
          alt="Icon - Announcement"
          width={34}
          style={{ position: "absolute", marginTop: -4 }}
        />
        <Padding left={48}>
          <h4>Attention</h4>
        </Padding>
        <Margin top={24}>
          <ModalWipWrapper>
            <li>
              <p>
                This is a work in progress, and is deployed for user testing
                purposes
              </p>
            </li>
            <li>
              <p>It is also to give the community an idea of our progress</p>
            </li>
            <li>
              <p>
                This is project of&nbsp;
                <a
                  href="https://www.enable.credit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Enable</b>
                </a>
                , an peer to peer stablecoin loan marketplace
              </p>
            </li>
          </ModalWipWrapper>
        </Margin>
      </React.Fragment>
    );
  }
}

export default ModalWip;
