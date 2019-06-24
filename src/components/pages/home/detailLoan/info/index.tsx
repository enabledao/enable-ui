// Pages loan info component
import React from "react";
import { Row, Col } from "../../../../lib";

const LoanInfo: React.FC = () => (
  <React.Fragment>
    <h5>Loan Details</h5>
    <Row>
      <Col lg={4} md={6}>
        <p>Loan Purpose</p>
        <p>Amount</p>
        <p>Tenor</p>
        <p>Start Date</p>
        <p>Due Date</p>
        <p>Interest payouts</p>
        <p>Interest rate per annum</p>
        <p>Loan Grade</p>
      </Col>
      <Col lg={8} md={6}>
        <p>: Education</p>
        <p>: 60,000 Dai</p>
        <p>: 12 months</p>
        <p>: 1 Aug 2019</p>
        <p>: 1 Aug 2020</p>
        <p>: Monthly</p>
        <p>: 6%</p>
        <p>: Experimental</p>
      </Col>
    </Row>
  </React.Fragment>
);

export default LoanInfo;
