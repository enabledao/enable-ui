import React from "react";
import billIcon from "../../../../../../images/icons/bill.svg";
import { Margin, Padding } from "../../../../../../styles/utils";
import { RouteComponentProps } from "react-router-dom";
import { Row, Col } from "../../../../../lib";
import {
  RepaymentCard,
  RepaymentInline,
  RepaymentTitleWrapper,
  RepaymentTitle,
  RepaymentTitleMobile
} from "./styled";

interface RepaymentProps extends RouteComponentProps<any> {}

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

interface Repayment {
  due: string;
  interest: string;
  principal: string;
  total: string;
}
interface RepaymentProps {
  repayments: Repayment[];
}
const Repayment: any = ({repayments} : RepaymentProps) => (
  <Row>
    <Col lg={12}>
      <img
        src={billIcon}
        alt="Icon - Bill"
        width={34}
        style={{ position: "absolute" }}
      />
      <Padding left={48}>
        <h5>Repayment Schedule</h5>
        <p>Estimation of the monthly loan repayment.</p>
      </Padding>
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
      {repayments.map((res, indx) => (
        <RepaymentCard key={indx}>
          <RepaymentInline>
            <RepaymentTitleMobile>Date</RepaymentTitleMobile>
            <p>{res.due}</p>
          </RepaymentInline>
          <RepaymentInline>
            <RepaymentTitleMobile>Repayment Due</RepaymentTitleMobile>
            <p>{res.total} Dai</p>
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
);

Repayment.defaultProps = {
  repayments: listRepayment,
}
export default Repayment;
