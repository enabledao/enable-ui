import React from 'react'
import { Container, MainContainer } from '../../../../styles/bases'
import {
    BoldDetails,
    BoxStats,
    HeroWrapper,
    HeroContent,
    HeroTitle,
} from '../styled'
import BorrowerActions from '../borrowerActions'
import { Margin } from '../../../../styles/utils'
import RepaymentStatus from '../repaymentStatus'
import { Row, Col } from '../../../lib'
import PatternImage from '../../../../images/pattern.png'
import Tabs from '../tab'
import { prepBigNumber } from '../../../../utils/web3Utils'

interface RenderBorrowerLoanProps {
    loanStatus: string
    paymentToken: any
    principalDisbursed: string
    totalPaid: string
    totalReleased: string
    totalShares: string
    transacting: boolean
    onborrowerwithdraw: any
    onrepay: any
    onstartcrowdfund: any
    repayments: object
}
const renderBorrowerLoan: any = ({
    loanStatus,
    paymentToken,
    principalDisbursed,
    transacting,
    totalPaid,
    totalReleased,
    totalShares,
    onborrowerwithdraw,
    onrepay,
    onstartcrowdfund,
    repayments,
}: RenderBorrowerLoanProps) => (
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
                                    Amount raised
                                    <BoldDetails>
                                        {!totalShares
                                            ? '0'
                                            : prepBigNumber(
                                                  totalShares,
                                                  paymentToken.decimals,
                                                  true
                                              )}{' '}
                                        Dai
                                    </BoldDetails>
                                </p>
                                <p>
                                    Loan Disbursed
                                    <BoldDetails>
                                        {!principalDisbursed
                                            ? '0'
                                            : prepBigNumber(
                                                  principalDisbursed,
                                                  paymentToken.decimals,
                                                  true
                                              )}{' '}
                                        Dai
                                    </BoldDetails>
                                </p>
                                <p>
                                    Amount Repaid
                                    <BoldDetails>
                                        {!totalPaid
                                            ? '0'
                                            : prepBigNumber(
                                                  totalPaid,
                                                  paymentToken.decimals,
                                                  true
                                              )}{' '}
                                        Dai
                                    </BoldDetails>
                                </p>
                                <p>
                                    Amount withdrawn
                                    <BoldDetails>
                                        {!totalReleased
                                            ? '0'
                                            : prepBigNumber(
                                                  totalReleased,
                                                  paymentToken.decimals,
                                                  true
                                              )}{' '}
                                        Dai
                                    </BoldDetails>
                                </p>
                                <p>
                                    Status
                                    <BoldDetails>{loanStatus}</BoldDetails>
                                </p>
                            </BoxStats>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={'hidden'}>
                            <BoxStats>
                                <p>Amount raised</p>
                                <h4>
                                    {!totalShares
                                        ? '0'
                                        : prepBigNumber(
                                              totalShares,
                                              paymentToken.decimals,
                                              true
                                          )}{' '}
                                    Dai
                                </h4>
                            </BoxStats>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={'hidden'}>
                            <BoxStats>
                                <p>Loan Disbursed</p>
                                <h4>
                                    {!principalDisbursed
                                        ? '0'
                                        : prepBigNumber(
                                              principalDisbursed,
                                              paymentToken.decimals,
                                              true
                                          )}{' '}
                                    Dai
                                </h4>
                            </BoxStats>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={'hidden'}>
                            <BoxStats>
                                <p>Amount Repaid</p>
                                <h4>
                                    {!totalPaid
                                        ? '0'
                                        : prepBigNumber(
                                              totalPaid,
                                              paymentToken.decimals,
                                              true
                                          )}{' '}
                                    Dai
                                </h4>
                            </BoxStats>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={'hidden'}>
                            <BoxStats>
                                <p>Amount withdrawn</p>
                                <h4>
                                    {!totalReleased
                                        ? '0'
                                        : prepBigNumber(
                                              totalReleased,
                                              paymentToken.decimals,
                                              true
                                          )}{' '}
                                    Dai
                                </h4>
                            </BoxStats>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={'hidden'}>
                            <BoxStats>
                                <p>Status</p>
                                <h4>{loanStatus}</h4>
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
                            borrower={true}
                            transacting={transacting}
                            loanStatus={loanStatus}
                            onborrowerwithdraw={onborrowerwithdraw}
                            onrepay={onrepay}
                            onstartcrowdfund={onstartcrowdfund}
                            repayments={repayments}
                        />
                    </Col>
                    <Col lg={6} md={12} xs="hidden">
                        <HeroContent>
                            <RepaymentStatus repayments={repayments} />
                        </HeroContent>
                    </Col>
                    <Col lg={6} md={12} xs="hidden">
                        <HeroContent>
                            <BorrowerActions
                                transacting={transacting}
                                loanStatus={loanStatus}
                                onborrowerwithdraw={onborrowerwithdraw}
                                onrepay={onrepay}
                                onstartcrowdfund={onstartcrowdfund}
                            />
                        </HeroContent>
                    </Col>
                </Row>
            </div>
        </MainContainer>
    </HeroWrapper>
)

export default renderBorrowerLoan
