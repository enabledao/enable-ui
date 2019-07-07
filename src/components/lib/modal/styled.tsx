import styled from "styled-components";
import { ModalProps } from "./interface";
import { MaxWidth } from "../../../styles/utils";

const ModalWrapper = styled.div<ModalProps>`
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 48px 16px;
  height: 100%;
  min-height: 100vh;
  overflow: scroll;
`;

const ModalBody = styled.div`
  width: 60%;
  max-width: 60%;
  margin: auto;
  background-color: white;
  padding: 48px 32px;
  border-radius: 8px;
  position: relative;
  ${MaxWidth.lg`
    width: 80%;
    max-width: 80%;
  `}
  ${MaxWidth.md`
    width: 90%;
    max-width: 90%;
  `}
  ${MaxWidth.sm`
    width: 100%;
    max-width: 100%;
  `}
`;

const ModalClose = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
  color: #b72814;
  cursor: pointer;
  z-index: 10;
  background-color: #b72814;
  color: white;
  display: flex;
  border-radius: 100px;
  border: 2px solid white;
`;

export { ModalWrapper, ModalBody, ModalClose };
