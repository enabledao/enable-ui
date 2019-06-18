// Pages home component
import React from "react";
import { Container } from "../../../styles/bases";
import { withNavbarAndFooter } from "../../hoc";
import { Padding } from "../../../styles/utils";

const Home: React.FC = () => {
  return (
    <Container>
      <Padding vertical={48}>
        <h1>Stablecoin Loans</h1>
        <p>Enabling opportunity through borderless credit</p>
      </Padding>
    </Container>
  );
};

export default withNavbarAndFooter(Home);
