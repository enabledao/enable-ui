import React from 'react'
import { Container, MainContainer } from '../../../../styles/bases'
import {
    BoldDetails,
    BoxStats,
    HeroWrapper,
    HeroContent,
    HeroTitle,
} from '../styled'
import { Margin } from '../../../../styles/utils'
import { Row, Col } from '../../../lib'
import PatternImage from '../../../../images/pattern.png'
import Tabs from '../tab'
import Withdrawal from '../withdrawals'
import RepaymentStatus from '../repaymentStatus'
import { prepBigNumber } from '../../../../utils/web3Utils'

interface RenderLenderLoanProps {
    paymentToken: any
    shares: string
    released: string
    releaseAllowance: string
    transacting: boolean
    repayments: object
    withdrawals: object
    onWithdraw: () => {}
}

const renderLenderLoan = ({
    paymentToken,
    shares,
    released,
    releaseAllowance,
    transacting,
    repayments,
    withdrawals,
    onWithdraw,
}: RenderLenderLoanProps) => (
    <HeroWrapper>
        <HeroTitle>
            <img
                style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    left: 0,
                    transform: 'scaleX(-1)',
                }}
                src={PatternImage}
                alt="pattern"
            />
            <img
                style={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    right: 0,
                }}
                src={PatternImage}
                alt="pattern"
            />
            <Container>
                <Margin vertical={48}>
                    <Row>
                        <Col lg="hidden" md="hidden" sm="hidden" xs={12}>
                            <BoxStats>
                                <p>
                                    Account Balance
                                    <BoldDetails>
                                        {!releaseAllowance
                                            ? '0'
                                            : prepBigNumber(
                                                  releaseAllowance,
                                                  paymentToken.decimals,
                                                  true
                                              )}{' '}
                                        Dai
                                    </BoldDetails>
                                </p>
                                <p>
                                    Repaid
                                    <BoldDetails>
                                        {!released
                                            ? '0'
                                            : prepBigNumber(
                                                  released,
                                                  paymentToken.decimals,
                                                  true
                                              )}{' '}
                                        Dai
                                    </BoldDetails>
                                </p>
                                <p>
                                    Invested Amount
                                    <BoldDetails>
                                        {!shares
                                            ? '0'
                                            : prepBigNumber(
                                                  shares,
                                                  paymentToken.decimals,
                                                  true
                                              )}{' '}
                                        Dai
                                    </BoldDetails>
                                </p>
                            </BoxStats>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs="hidden">
                            <BoxStats>
                                <p>Account Balance</p>
                                <h4>
                                    {!releaseAllowance
                                        ? '0'
                                        : prepBigNumber(
                                              releaseAllowance,
                                              paymentToken.decimals,
                                              true
                                          )}{' '}
                                    Dai
                                </h4>
                            </BoxStats>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs="hidden">
                            <BoxStats>
                                <p>Repaid</p>
                                <h4>
                                    {!released
                                        ? '0'
                                        : prepBigNumber(
                                              released,
                                              paymentToken.decimals,
                                              true
                                          )}{' '}
                                    Dai
                                </h4>
                            </BoxStats>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs="hidden">
                            <BoxStats>
                                <p>Invested Amount</p>
                                <h4>
                                    {!shares
                                        ? '0'
                                        : prepBigNumber(
                                              shares,
                                              paymentToken.decimals,
                                              true
                                          )}{' '}
                                    Dai
                                </h4>
                            </BoxStats>
                        </Col>
                    </Row>
                </Margin>
            </Container>
        </HeroTitle>
        <MainContainer>
            <div style={{ position: 'relative', top: -80 }}>
                <Row>
                    <Col lg="hidden" md="hidden" sm="hidden" xs={12}>
                        <Tabs
                            borrower={false}
                            allowance={releaseAllowance}
                            withdrawals={withdrawals}
                            transacting={transacting}
                            onWithdraw={onWithdraw}
                            repayments={repayments}
                        />
                    </Col>
                    <Col lg={6} md={12} xs="hidden">
                        <HeroContent>
                            <Withdrawal
                                allowance={releaseAllowance}
                                withdrawals={withdrawals}
                                transacting={transacting}
                                onWithdraw={onWithdraw}
                            />
                        </HeroContent>
                    </Col>
                    <Col lg={6} md={12} xs="hidden">
                        <HeroContent>
                            <RepaymentStatus repayments={repayments} />
                        </HeroContent>
                    </Col>
                </Row>
            </div>
        </MainContainer>
    </HeroWrapper>
)

export default renderLenderLoan
