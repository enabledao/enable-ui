import React from "react";
import { Container } from "../../../../styles/bases";
import { CtaWrapper, CtaContent } from "./styled";
import { Row, Col, Button } from "../../../lib";

const Cta: React.FC = () => (
  <CtaWrapper>
    <Container>
      <CtaContent>
        <Row justify="center" align="center">
          <Col lg={10}>
            <Row justify="center" align="center">
              <Col lg={8} md={12}>
                <h1>Ready to Help Ines?</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio veniam soluta modi? Dolores praesentium voluptas, iusto,
                  officiis odit adipisci error harum pariatur incidunt quo
                  molestias fuga a excepturi dolore quidem.
                </p>
              </Col>
              <Col lg={4} md={12}>
                <Button color="purple" onClick={() => console.log("click")}>
                  Start lend now
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </CtaContent>
    </Container>
  </CtaWrapper>
);

export default Cta;
