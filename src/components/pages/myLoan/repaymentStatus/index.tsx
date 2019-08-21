import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { Row, Col } from "../../../lib";
import {
  RepaymentWrapper,
  RepaymentTitleWrapper,
  RepaymentTitle,
  RepaymentCard,
  RepaymentInline,
  RepaymentTitleMobile
} from "./styled";

const listRepayment = [
  { date: "1 Aug 2019", due: 0.035, status: "Success" },
  { date: "1 Sept 2019", due: 0.035, status: "Success" },
  { date: "1 Oct 2019	", due: 0.035, status: "Coming soon" },
  { date: "1 Nov 2019", due: 0.035, status: "Coming soon" },
  { date: "1 Dec 2019", due: 0.035, status: "Coming soon" },
  { date: "1 Jan 2020", due: 0.035, status: "Coming soon" },
  { date: "1 Feb 2020", due: 0.035, status: "Coming soon" },
  { date: "1 Mar 2020", due: 0.035, status: "Coming soon" },
  { date: "1 Apr 2020", due: 0.035, status: "Coming soon" },
  { date: "1 May 2020", due: 0.035, status: "Coming soon" },
  { date: "1 Jun 2020", due: 0.035, status: "Coming soon" },
  { date: "1 Jul 2020", due: 0.035, status: "Coming soon" },
  { date: "Total", due: 7.42 }
];

interface Repayment {
  date: string;
  due: string;
  status: string;
}
interface RepaymentProps {
  repayments: Repayment[];
}

const RepaymentStatus: any = ({ repayments }: RepaymentProps) => (
  <RepaymentWrapper>
    <Container>
      <Row justify="center">
        <Col lg={10} md={12}>
          <h5>Repayment Status</h5>
          <p>Your repayment Status will apear here</p>
          <Margin top={24}>
            <RepaymentTitleWrapper>
              <RepaymentTitle>
                <p>Date</p>
              </RepaymentTitle>
              <RepaymentTitle>
                <p>Repayment Due</p>
              </RepaymentTitle>
              <RepaymentTitle>
                <p>Status</p>
              </RepaymentTitle>
            </RepaymentTitleWrapper>
          </Margin>
          {repayments && repayments.map(res => (
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
                <RepaymentTitleMobile>Status</RepaymentTitleMobile>
                <p>{res.status}</p>
              </RepaymentInline>
            </RepaymentCard>
          ))}
        </Col>
      </Row>
    </Container>
  </RepaymentWrapper>
);

export default RepaymentStatus;
