import React from "react";
import { Margin, Padding } from "../../../../styles/utils";
import { Row, Col, Progress } from "../../../lib";
import FileIcon from "../../../../images/fileIcon.png";
import { RepaymentWrapper } from "./styled";

import {
  TableCard,
  TableInline,
  TableTitleWrapper,
  TableTitle,
  TableTitleMobile
} from "../styled";

const listRepayment = [
  { date: "1 Aug 2019", amount: 0.035, paid: true },
  { date: "1 Sept 2019", amount: 0.035, paid: true },
  { date: "1 Oct 2019	", amount: 0.035, paid: false },
  { date: "1 Nov 2019", amount: 0.035, paid: false },
  { date: "1 Dec 2019", amount: 0.035, paid: false },
  { date: "1 Jan 2020", amount: 0.035, paid: false },
  { date: "1 Feb 2020", amount: 0.035, paid: false },
  { date: "1 Mar 2020", amount: 0.035, paid: false },
  { date: "1 Apr 2020", amount: 0.035, paid: false },
  { date: "1 May 2020", amount: 0.035, paid: false },
  { date: "1 Jun 2020", amount: 0.035, paid: false },
  { date: "1 Jul 2020", amount: 0.035, paid: false },
  { date: "Total", amount: 7.42 }
];

interface Repayment {
  date: string;
  amount: string;
  paid?: boolean;
}
interface RepaymentProps {
  repayments: Repayment[];
}

const RepaymentStatus: any = ({ repayments }: RepaymentProps) => (
  <RepaymentWrapper>
    <h5>Income Sharing</h5>
    <Margin top={28}>
      <h5>
        12/72&nbsp;
        <small style={{ color: "#464b61" }}>monthly repayments made</small>
      </h5>
      <Margin vertical={8}>
        <Progress current={50} />
      </Margin>
      <p>
        Next repayment&nbsp;
        <b>22 August 2021</b>
      </p>
    </Margin>
    <Margin top={24}>
      <TableTitleWrapper>
        <TableTitle>
          <p>DATE</p>
        </TableTitle>
        <TableTitle>
          <p>ISA DUE</p>
        </TableTitle>
        <TableTitle>
          <p>STATUS</p>
        </TableTitle>
      </TableTitleWrapper>
      {repayments && repayments.length !== 0 ? (
        repayments.map((res, indx) => (
          <TableCard key={indx}>
            <TableInline>
              <TableTitleMobile>Date</TableTitleMobile>
              <p>{new Date(res.date).toLocaleDateString()}</p>
            </TableInline>
            <TableInline>
              <TableTitleMobile>Repayment Due</TableTitleMobile>
              <p>{res.amount} Dai</p>
            </TableInline>
            <TableInline>
              <TableTitleMobile>Status</TableTitleMobile>
              <p>{res.paid ? "Success" : "Coming soon"}</p>
            </TableInline>
          </TableCard>
        ))
      ) : (
        <React.Fragment>
          <Row text="center">
            <Col lg={12}>
              <Padding vertical={40}>
                <img src={FileIcon} alt="File - Icon" />
                <Margin top={24}>
                  <p>Your repayment with appear here</p>
                </Margin>
              </Padding>
            </Col>
          </Row>
        </React.Fragment>
      )}
    </Margin>
  </RepaymentWrapper>
);

RepaymentStatus.defaultProps = {
  repayments: listRepayment
};

export default RepaymentStatus;
