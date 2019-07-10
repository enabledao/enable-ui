import React from "react";
import walletIcon from "../../../images/icons/wallet.svg";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Container } from "../../../styles/bases";
import { Margin, Padding } from "../../../styles/utils";
import { Row, Col } from "../../lib";
import { MyLoanWrapper } from "./styled";
import Withdrawal from "./withdrawals";
import RepaymentStatus from "./repaymentStatus";

interface MyLoanProps extends RouteComponentProps<any> {}

const MyLoan: React.FC<MyLoanProps> = () => (
  <React.Fragment>
    <MyLoanWrapper>
      <Container>
        <Row justify="center">
          <Col lg={10} md={12}>
            <img
              src={walletIcon}
              alt="Icon - Wallet"
              width={34}
              style={{ position: "absolute" }}
            />
            <Padding left={48}>
              <h2>My Loan</h2>
            </Padding>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Margin vertical={48}>
              <Row text="center">
                <Col lg={4} md={4} sm={4} xs={4}>
                  <h4>7 Dai</h4>
                  <p>Loaned Amount</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <h4>0 Dai</h4>
                  <p>Repaid</p>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <h4>0 Dai</h4>
                  <p>Account Balance</p>
                </Col>
              </Row>
            </Margin>
          </Col>
        </Row>
      </Container>
      <Margin bottom={48}>
        <Withdrawal />
      </Margin>
      <RepaymentStatus />
    </MyLoanWrapper>
  </React.Fragment>
);

export default withRouter<MyLoanProps>(MyLoan);
