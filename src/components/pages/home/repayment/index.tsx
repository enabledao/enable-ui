import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { Row, Col } from "../../../lib";
import RepaymentIllustration from "../../../../images/illustration/repayment.svg";
import { RepaymentWrapper, RepaymentCard, RepaymentInline } from "./Styled";

const Repayment: React.FC = () => (
  <Container>
    <RepaymentWrapper>
      <Row>
        <Col lg={5} md={4} sm={12} text="center">
          <img
            src={RepaymentIllustration}
            alt="Repayment - Illustraion"
            width={300}
          />
        </Col>
        <Col lg={7} md={8} sm={12}>
          <h1>Repayment Schedule</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Margin top={32}>
            <RepaymentInline>
              <p>Date</p>
            </RepaymentInline>
            <RepaymentInline>
              <p>Repayment Due</p>
            </RepaymentInline>
            <RepaymentInline>
              <p>Principal</p>
            </RepaymentInline>
            <RepaymentInline>
              <p>Interest</p>
            </RepaymentInline>
          </Margin>
          <RepaymentCard>
            <RepaymentInline>
              <p>1 Aug 2019</p>
            </RepaymentInline>
            <RepaymentInline>
              <p>300 Dai</p>
            </RepaymentInline>
            <RepaymentInline>
              <p>0 Dai</p>
            </RepaymentInline>
            <RepaymentInline>
              <p>300 Dai</p>
            </RepaymentInline>
          </RepaymentCard>
        </Col>
      </Row>
    </RepaymentWrapper>
  </Container>
);

export default Repayment;
