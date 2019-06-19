// Pages home component
import React from "react";
import { Container } from "../../../styles/bases";
import { withNavbarAndFooter } from "../../hoc";
import { Padding } from "../../../styles/utils";

const Loan: React.FC = () => {
  return (
    <Container>
      <Padding vertical={48}>
        <h1>Ines Loans</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi
          ullam nam odit iusto maxime temporibus commodi natus consequuntur
          necessitatibus architecto ratione, sapiente accusantium quaerat
          repellat incidunt fugiat rem! Culpa?
        </p>
      </Padding>
    </Container>
  );
};

export default withNavbarAndFooter(Loan);
