import React from 'react'
import { Margin } from '../../../../styles/utils'
import { Row, Col } from '../../../lib'
import { calDaysSinceTimestamp } from '../../../../utils/jsCalculator'
import { prepBigNumber } from '../../../../utils/web3Utils'

interface Contributor {
    address: string
    amount: string
    lastContribution: string
}
interface ListContributorProps {
    contributors: Contributor[]
    paymentToken: any
}

// To Do (Dennis): Missing the name of the contributor
const ListContributor: any = ({
    contributors,
    paymentToken,
}: ListContributorProps) => (
    <React.Fragment>
        <Margin vertical={40}>
            <h5>Contributors</h5>
            <p>Highest contributors to date</p>
        </Margin>
        <Margin top={40} bottom={24}>
            <Row>
                {
                    // To Do (Dennis): Missing the name of the contributor and the date of contribution
                }
                {contributors &&
                    contributors.map(contributor => (
                        <React.Fragment key={contributor.address}>
                            <Col lg={6}>
                                <h6>Anonymous</h6>
                                <small>
                                    <p
                                        style={{
                                            backgroundColor: '#f7f7f7',
                                            padding: 8,
                                            display: 'inline-block',
                                        }}
                                    >
                                        {contributor.address.replace(
                                            contributor.address.substring(
                                                10,
                                                30
                                            ),
                                            '.....'
                                        )}
                                    </p>
                                </small>
                            </Col>
                            <Col lg={6} text="right">
                                <h6>
                                    <b>
                                        {prepBigNumber(
                                            contributor.amount || 0,
                                            paymentToken.decimals,
                                            true
                                        )}
                                    </b>{' '}
                                    Dai
                                </h6>
                                <small>
                                    <p>{calDaysSinceTimestamp(contributor.lastContribution)} Day(s) ago</p>
                                </small>
                            </Col>
                            <Margin vertical={50} />
                        </React.Fragment>
                    ))}
            </Row>
        </Margin>
    </React.Fragment>
)

export default ListContributor
