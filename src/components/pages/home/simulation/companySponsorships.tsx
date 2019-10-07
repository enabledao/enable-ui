import { Button } from '../../../lib'
import { Margin } from '../../../../styles/utils'
import { SimulationWrapper } from '../simulation/styled'
import React from 'react'

const companySponsorships: any = () => (
    <React.Fragment>
        <Margin vertical={40}>
            <h5>Company Sponsorships</h5>
        </Margin>
        <Margin vertical={24}>
            <SimulationWrapper>
                <h5>Gold Tier</h5>
                <h6>Lend 30,000 Dai or more</h6>
                <p>
                    I will be your Campus Ambassador at Cornell, and promote
                    your company, help with event preparations and publicity
                </p>
                <Margin top={40} bottom={30}>
                    <h6 style={{ color: '#21b549', cursor: 'pointer' }}>
                        Expected Repayment Calculator
                    </h6>
                    <h5>
                        46,612 Dai&nbsp;
                        <small>&nbsp;(simulated $86,320 annual salary)</small>
                    </h5>
                </Margin>
                <Button
                    color="green"
                    outline
                    onClick={() =>
                        window.open(
                            'https://calendly.com/inesfund/video-interview'
                        )
                    }
                >
                    Schedule Video Interview
                </Button>
            </SimulationWrapper>
        </Margin>
        <Margin vertical={24}>
            <SimulationWrapper>
                <h5>Silver Tier</h5>
                <h6>Lend 5,000 Dai or more</h6>
                <p>
                    I will put your company's stickers on my laptop, as well as
                    my graduation robe in 2 years time
                </p>
                <Margin top={40} bottom={30}>
                    <h6 style={{ color: '#21b549', cursor: 'pointer' }}>
                        Expected Repayment Calculator
                    </h6>
                    <h5>
                        7,768 Dai&nbsp;
                        <small>&nbsp;(simulated $86,320 annual salary)</small>
                    </h5>
                </Margin>
                <Button
                    color="green"
                    outline
                    onClick={() =>
                        window.open(
                            'https://calendly.com/inesfund/video-interview'
                        )
                    }
                >
                    Schedule Video Interview
                </Button>
            </SimulationWrapper>
        </Margin>
    </React.Fragment>
)

export default companySponsorships
