import React from 'react'
import { Row, Col } from '../../lib'
import { prepBigNumber } from '../../../utils/web3Utils'

interface Contributor {
    address: string
    amount: string
}
interface ModalListContributorProps {
    contributors: Contributor[]
    paymentToken: any
}

// To Do (Dennis): Missing the name of the contributor
const ModalListContributor: any = ({
    contributors,
    paymentToken,
}: ModalListContributorProps) => (
    <React.Fragment>
        <h4>List of contributing lenders</h4>
        <Row>
            {contributors &&
                contributors.map(contributor => (
                    <Col lg={4} md={6} sm={12} key={contributor.address}>
                        <h6>Anonymous</h6>
                        <small>
                            <p>
                                {contributor.address.replace(
                                    contributor.address.substring(10, 30),
                                    '.....'
                                )}
                            </p>
                        </small>
                        <p>
                            Contribute{' '}
                            <b>
                                {prepBigNumber(
                                    contributor.amount || 0,
                                    paymentToken.decimals,
                                    true
                                )}
                            </b>{' '}
                            Dai
                        </p>
                    </Col>
                ))}
        </Row>
    </React.Fragment>
)

export default ModalListContributor
