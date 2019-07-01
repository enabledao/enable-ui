import styled from "styled-components";

const LoanOfferModals = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 100vh;
  z-index: 2;
  overflow: scroll;
`;

const ModalDialog = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

export { LoanOfferModals, ModalDialog };
