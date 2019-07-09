import React from "react";
import billIcon from "../../../../images/icons/bill.svg";
import { Container } from "../../../../styles/bases";
import { Margin, Padding } from "../../../../styles/utils";
import { Row, Col } from "../../../lib";
import {
  RepaymentWrapper,
  RepaymentCard,
  RepaymentInline,
  RepaymentTitleWrapper,
  RepaymentTitle,
  RepaymentTitleMobile
} from "./styled";

const listRepayment = [
  { date: "1 Aug 2019", due: 300, principal: 0, interest: 300 },
  { date: "1 Sept 2019", due: 300, principal: 0, interest: 300 },
  { date: "1 Oct 2019	", due: 300, principal: 0, interest: 300 },
  { date: "1 Nov 2019", due: 300, principal: 0, interest: 300 },
  { date: "1 Dec 2019", due: 300, principal: 0, interest: 300 },
  { date: "1 Jan 2020", due: 300, principal: 0, interest: 300 },
  { date: "1 Feb 2020", due: 300, principal: 0, interest: 300 },
  { date: "1 Mar 2020", due: 300, principal: 0, interest: 300 },
  { date: "1 Apr 2020", due: 300, principal: 0, interest: 300 },
  { date: "1 May 2020", due: 300, principal: 0, interest: 300 },
  { date: "1 Jun 2020", due: 300, principal: 0, interest: 300 },
  { date: "1 Jul 2020", due: 300, principal: 60000, interest: 60300 },
  { date: "Total", due: 300, principal: 60000, interest: 3600 }
];

const Repayment: React.FC = () => (
  <RepaymentWrapper>
    <Container>
      <Row justify="center">
        <Col lg={10} md={12}>
          <img
            src={billIcon}
            alt="Icon - Bill"
            width={34}
            style={{ position: "absolute" }}
          />
          <Padding left={48}>
            <h2>Repayment Schedule</h2>
          </Padding>
          <p>Estimation of the monthly loan repayment.</p>
          <Margin top={48}>
            <RepaymentTitleWrapper>
              <RepaymentTitle>
                <p>Date</p>
              </RepaymentTitle>
              <RepaymentTitle>
                <p>Repayment Due</p>
              </RepaymentTitle>
              <RepaymentTitle>
                <p>Principal</p>
              </RepaymentTitle>
              <RepaymentTitle>
                <p>Interest</p>
              </RepaymentTitle>
            </RepaymentTitleWrapper>
          </Margin>
          {listRepayment.map(res => (
            <RepaymentCard key={res.date}>
              <RepaymentInline>
                <RepaymentTitleMobile>Date</RepaymentTitleMobile>
                <p>{res.date}</p>
              </RepaymentInline>
              <RepaymentInline>
                <RepaymentTitleMobile>Repayment Due</RepaymentTitleMobile>
                <p>{res.due} Dai</p>
              </RepaymentInline>
              <RepaymentInline>
                <RepaymentTitleMobile>Principal</RepaymentTitleMobile>
                <p>{res.principal} Dai</p>
              </RepaymentInline>
              <RepaymentInline>
                <RepaymentTitleMobile>Interest</RepaymentTitleMobile>
                <p>{res.interest} Dai</p>
              </RepaymentInline>
            </RepaymentCard>
          ))}
        </Col>
      </Row>
    </Container>
  </RepaymentWrapper>
);

export default Repayment;
