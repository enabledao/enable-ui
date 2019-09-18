import * as React from "react";
import { Row, Col } from "../../../../lib";
import { Margin } from "../../../../../styles/utils";
import {
  CostBreakdownCard,
  CostBreakdownInline,
  CostBreakdownTitleWrapper,
  CostBreakdownTitle,
  CostBreakdownTitleMobile
} from "./styled";

export interface InvestmentBreakdownProps {}

export interface InvestmentBreakdownState {}

class InvestmentBreakdown extends React.Component<
  InvestmentBreakdownProps,
  InvestmentBreakdownState
> {
  constructor(props: InvestmentBreakdownProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Margin vertical={24}>
        <Row>
          <Col lg={7} md={12}>
            <Margin top={24}>
              <h5>Cost Breakdown</h5>
              <Margin top={24}>
                <CostBreakdownTitleWrapper>
                  <CostBreakdownTitle>
                    <p>Items</p>
                  </CostBreakdownTitle>
                  <CostBreakdownTitle>
                    <p>Cost</p>
                  </CostBreakdownTitle>
                  <CostBreakdownTitle>
                    <p>2 Years total</p>
                  </CostBreakdownTitle>
                </CostBreakdownTitleWrapper>
              </Margin>
              <CostBreakdownCard>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Items</CostBreakdownTitleMobile>
                  <p>Tuition Fee</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Cost</CostBreakdownTitleMobile>
                  <p>$ 37,022 / academic year</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>
                    2 Years total
                  </CostBreakdownTitleMobile>
                  <p>$ 74,044</p>
                </CostBreakdownInline>
              </CostBreakdownCard>
              <CostBreakdownCard>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Items</CostBreakdownTitleMobile>
                  <p>Student Health Insurance</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Cost</CostBreakdownTitleMobile>
                  <p>$ 3,116 / academic year</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>
                    2 Years total
                  </CostBreakdownTitleMobile>
                  <p>$ 74,044</p>
                </CostBreakdownInline>
              </CostBreakdownCard>
              <CostBreakdownCard>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Items</CostBreakdownTitleMobile>
                  <p>Student Activity Fee</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Cost</CostBreakdownTitleMobile>
                  <p>$ 84 / academic year</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>
                    2 Years total
                  </CostBreakdownTitleMobile>
                  <p>$ 168</p>
                </CostBreakdownInline>
              </CostBreakdownCard>
              <CostBreakdownCard>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Items</CostBreakdownTitleMobile>
                  <p>Living Expenses</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Cost</CostBreakdownTitleMobile>
                  <p>$ 2,268 / month</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>
                    2 Years total
                  </CostBreakdownTitleMobile>
                  <p>$ 54,432</p>
                </CostBreakdownInline>
              </CostBreakdownCard>
              <CostBreakdownCard>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Items</CostBreakdownTitleMobile>
                  <p>Books & Supply</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Cost</CostBreakdownTitleMobile>
                  <p>$ 1,330</p>
                </CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>
                    2 Years total
                  </CostBreakdownTitleMobile>
                  <p>$ 1,330</p>
                </CostBreakdownInline>
              </CostBreakdownCard>
              <CostBreakdownCard>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Items</CostBreakdownTitleMobile>
                  <p>
                    <b>Total Academic Cost</b>
                  </p>
                  <p>Savings & Partial Scholarship</p>
                </CostBreakdownInline>
                <CostBreakdownInline></CostBreakdownInline>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>$136.206</CostBreakdownTitleMobile>
                  <p>
                    <b>$136.206</b>
                  </p>
                  <p>- $76,206</p>
                </CostBreakdownInline>
              </CostBreakdownCard>
              <CostBreakdownCard>
                <CostBreakdownInline>
                  <CostBreakdownTitleMobile>Items</CostBreakdownTitleMobile>
                  <p>
                    <b>InesFund Crowdfunding</b>
                  </p>
                </CostBreakdownInline>
                <CostBreakdownInline></CostBreakdownInline>
                <CostBreakdownInline>
                  <p>
                    <b>$60,000</b>
                  </p>
                </CostBreakdownInline>
              </CostBreakdownCard>
            </Margin>
          </Col>
          <Col lg={5} md={12}>
            <Margin vertical={24}>
              <h5>Investment Details</h5>
              <Margin vertical={24}>
                <p>Type</p>
                <p>
                  <b>Income Sharing Agreement (ISA)</b>
                </p>
              </Margin>
              <Margin vertical={24}>
                <p>ISA</p>
                <p>
                  <b>18%</b>
                </p>
                <small>divided proportionally among investors</small>
              </Margin>
              <Margin vertical={24}>
                <p>Amount</p>
                <p>
                  <b>60,000 Dai</b>
                </p>
              </Margin>
              <Margin vertical={24}>
                <Row>
                  <Col lg={6}>
                    <p>Minimum CostBreakdown</p>
                    <p>
                      <b>70,000 Dai</b>
                    </p>
                  </Col>
                  <Col lg={6}>
                    <p>Cap</p>
                    <p>
                      <b>90,000 Dai</b>
                    </p>
                  </Col>
                </Row>
              </Margin>
              <Margin vertical={24}>
                <p>Duration</p>
                <p>
                  <b>6 years</b>
                </p>
                <small>or up until cap is reached</small>
              </Margin>
              <Margin vertical={24}>
                <p>CostBreakdown Schedule</p>
                <p>
                  <b>Monthly</b>
                </p>
              </Margin>
              <Margin vertical={24}>
                <p>CostBreakdown Start</p>
                <p>
                  <b>Postgraduation, 2021</b>
                </p>
              </Margin>
            </Margin>
          </Col>
        </Row>
      </Margin>
    );
  }
}

export default InvestmentBreakdown;
