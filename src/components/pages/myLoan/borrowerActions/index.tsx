import React from "react";
import { Margin } from "../../../../styles/utils";
import { Row, Col, Button } from "../../../lib";
import { BorrowerActionBox } from "./styled";
import{ LoanStatuses } from "../../../../config/constants";

interface BorrowerActionProps {
  transacting: boolean;
  loanStatus: string;
  onborrowerwithdraw: () => {};
  onrepay: () => {};
  onstartcrowdfund: () => {};
}

const BorrowerAction: any = ({
  transacting,
  loanStatus,
  onborrowerwithdraw,
  onrepay,
  onstartcrowdfund
}: BorrowerActionProps) => (
  <React.Fragment>
    <h5>Actions</h5>
    <Margin top={32}>
      <BorrowerActionBox>
        { loanStatus === LoanStatuses.NOT_STARTED &&
          <Row>
            <Col lg={6} md={12}>
              <Button color="green" onClick={onstartcrowdfund} disabled={transacting}>
                Start Crowdfund
              </Button>
            </Col>
          </Row>
        }
        <Row>
          <Col lg={6} md={12}>
            <Button color="green" onClick={onborrowerwithdraw} disabled={transacting}>
              Withdraw Principal
            </Button>
          </Col>
        </Row>
        { loanStatus === LoanStatuses.REPAYMENT_CYCLE &&
          <Row>
            <Col lg={6} md={12}>
              <Button color="green" onClick={onrepay} disabled={transacting}>
                Repay
              </Button>
            </Col>
          </Row>
        }
      </BorrowerActionBox>
    </Margin>
  </React.Fragment>
);

BorrowerAction.defaultProps = {};

export default BorrowerAction;
