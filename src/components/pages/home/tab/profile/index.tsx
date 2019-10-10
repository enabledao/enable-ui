import React from 'react'
import { Margin, Padding } from '../../../../../styles/utils'
import { Row, Col } from '../../../../lib'
import TestimonialLinkedin from './testimonial'
import Timeline from './timeline'
import SimuLationReturn from '../../simulation'
import Writing from './writing'

interface TabProfileProps {
    contributors?: any
    expectedSalary?: any
    paymentToken?: any
    crowdloanInstance?: any
}

export interface ProfileState {
    showMoreProfile: boolean
}
class Profile extends React.Component<TabProfileProps, ProfileState> {
    state = {
        showMoreProfile: false,
    }

    render() {
        const { showMoreProfile } = this.state
        return (
            <React.Fragment>
                <Row>
                    <Col lg={7} md={12}>
                        <Margin top={16}>
                            <Writing showMoreProfile={showMoreProfile} />
                            <Margin top={32} bottom={60}>
                                <h5
                                    style={{
                                        color: '#21b549',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() =>
                                        this.setState({
                                            showMoreProfile: !showMoreProfile,
                                        })
                                    }
                                >
                                    {!showMoreProfile
                                        ? 'Read More'
                                        : 'Read Less'}
                                </h5>
                            </Margin>
                        </Margin>
                        <Margin bottom={60}>
                            <Timeline />
                        </Margin>
                        <TestimonialLinkedin />
                    </Col>
                    <Col lg={5} md="hidden">
                        <Padding left={40}>
                            <SimuLationReturn
                                contributors={this.props.contributors}
                                paymentToken={this.props.paymentToken}
                                expectedSalary={this.props.expectedSalary}
                            />
                        </Padding>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Profile
