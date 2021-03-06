import React from "react";
import { Margin } from "../../../../styles/utils";
import { Row, Col, Button, Spinner } from "../../../lib";
import { BorrowerActionBox } from "./styled";
import { WebViewH5 } from "../styled";
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
    <WebViewH5>Actions</WebViewH5>
    <Margin top={32}>
      <BorrowerActionBox>
        { loanStatus === LoanStatuses.NOT_STARTED &&
          <Row>
            <Col lg={6} md={12}>
              <Button color="green" onClick={onstartcrowdfund} disabled={transacting}>
                {transacting ?
                    <Spinner size="16"/> :
                    ("Start Crowdfund")
                }
              </Button>
            </Col>
          </Row>
        }
        <Row>
          <Col lg={6} md={12}>
            <Button color="green" onClick={onborrowerwithdraw} disabled={transacting}>
              {transacting ?
                  <Spinner size="16"/> :
                  ("Withdraw Principal")
            }
            </Button>
          </Col>
        </Row>
        { loanStatus === LoanStatuses.REPAYMENT_CYCLE &&
          <Row>
            <Col lg={6} md={12}>
              <Button color="green" onClick={onrepay} disabled={transacting}>
                {transacting ?
                    <Spinner size="16"/> :
                    ("Repay")
              }
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
