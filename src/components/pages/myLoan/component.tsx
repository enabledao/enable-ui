import React from "react";
import { Container } from "../../../styles/bases";
import { Margin } from "../../../styles/utils";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Row, Col } from "../../lib";
import { MyLoanWrapper } from "./styled";

interface MyLoanProps extends RouteComponentProps<any> {}

const MyLoan: React.FC<MyLoanProps> = () => (
  <MyLoanWrapper>
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <Margin bottom={16}>
            <h4>My Loan Detail</h4>
          </Margin>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            molestiae in deserunt laborum libero quidem fuga ipsa perferendis,
            assumenda vitae corporis qui porro esse. At itaque dignissimos
            dolor.
          </p>
        </Col>
      </Row>
    </Container>
  </MyLoanWrapper>
);

export default withRouter<MyLoanProps>(MyLoan);
