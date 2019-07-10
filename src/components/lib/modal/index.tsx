import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./interface";
import { ModalWrapper, ModalBody, ModalClose } from "./styled";
import Close from "../../../images/icons/close.svg";

class Modal extends React.Component<ModalProps, {}> {
  wrapperRef: any;

  constructor(props: ModalProps) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  setWrapperRef(node: any) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    const elApp = document.getElementById(
      "enableInterface"
    ) as HTMLInputElement;
    elApp.style.filter = "blur(2px)";
    if ("ontouchstart" in document.documentElement) {
      document.body.style.cursor = "pointer";
    }
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleClick() {
    const elModal = document.getElementById(
      "enableInterfaceModal"
    ) as HTMLInputElement;
    if (elModal) {
      elModal.remove();
    }
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    const elApp = document.getElementById(
      "enableInterface"
    ) as HTMLInputElement;
    elApp.style.filter = "none";
  }

  handleClickOutside(e: { target: any }) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.handleClick();
    }
  }

  render() {
    const { content } = this.props;
    return (
      <ModalWrapper>
        <ModalBody ref={this.setWrapperRef}>
          <ModalClose onClick={this.handleClick}>
            <img src={Close} alt="Icon - Close" width={32} />
          </ModalClose>
          {content}
        </ModalBody>
      </ModalWrapper>
    );
  }
}

export default function ShowModal(content: any) {
  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("id", "enableInterfaceModal");
  document.body.appendChild(modalContainer);

  ReactDOM.render(<Modal content={content} />, modalContainer);
}
