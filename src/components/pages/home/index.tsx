// Pages home component
import React from "react";
import { Container } from "../../../styles/bases";
import { withNavbarAndFooter } from "../../hoc";
import { Padding } from "../../../styles/utils";
import { Row, Col } from "../../lib/grid";

const Home: React.FC = () => {
  return (
    <Container>
      <Padding vertical={48}>
        <h1>Stablecoin Loans</h1>
        <p>Enabling opportunity through borderless credit</p>
        <Row>
          <Col lg={6}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              voluptatibus, corrupti atque doloremque nemo sunt ea sit
              reiciendis in. Doloremque laboriosam optio animi voluptatem
              distinctio dolorum amet vel consequatur similique.
            </p>
          </Col>
        </Row>
      </Padding>
    </Container>
  );
};

export default withNavbarAndFooter(Home);
