import React from "react";
import { Container } from "../../../../styles/bases";
import { LoanOfferModals, ModalDialog } from "./Styled";

interface LoanOfferStepOneState {
  LoanOfferStepTwo: boolean;
}

class LoanOfferStepOne extends React.Component<{}, LoanOfferStepOneState> {
  constructor(props: {}) {
    super(props);
    this.state = { LoanOfferStepTwo: false };
  }
  render() {
    return (
      <LoanOfferModals>
        <Container>
          <ModalDialog>
            <div>
              <h1>You are funding for Widya Imanesti</h1>
              <p>Jakarta - Indonesia</p>
              <p>Education - Loan</p>
            </div>
          </ModalDialog>
        </Container>
      </LoanOfferModals>
    );
  }
}

export default LoanOfferStepOne;
