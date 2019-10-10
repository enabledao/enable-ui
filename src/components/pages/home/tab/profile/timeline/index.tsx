import React from 'react'
import { Margin, Padding } from '../../../../../../styles/utils'

import {
    TimelineWrapper,
    TimelineYear,
    TimelineBlackWrapper,
    TimelineBlack,
} from './styled'

const Timeline: any = () => (
    <React.Fragment>
        <h4>Timeline and Repayments Plan</h4>
        <TimelineWrapper>
            <Margin top={24}>
                <TimelineYear>2019</TimelineYear>
                <span>Start attending Cornell University</span>
            </Margin>
            <Margin top={48}>
                <TimelineYear>2021</TimelineYear>
                <span>Graduated from Cornell University</span>
                <Padding left={90}>
                    <TimelineBlackWrapper>
                        <Margin top={48}>
                            <TimelineBlack />
                            <span>Start of Repayment</span>
                            <Margin top={48} left={36}>
                                <span>
                                    <b>Planning to work in the USA</b>
                                </span>
                            </Margin>
                            <Margin top={16} left={36}>
                                <span>
                                    Expected starting salary : $86,320/year
                                </span>
                            </Margin>
                            <Margin top={48} left={36}>
                                <span>
                                    <b>
                                        Full support from my husband’s
                                        (Doctorate) salary
                                    </b>
                                </span>
                            </Margin>
                            <Margin top={16} left={36}>
                                <span>
                                    Expected starting salary : $95,000/year
                                </span>
                            </Margin>
                            <Margin top={60}>
                                <TimelineBlack />
                                <span>Final Repayment</span>
                            </Margin>
                        </Margin>
                    </TimelineBlackWrapper>
                </Padding>
            </Margin>
            <Margin top={-31}>
                <TimelineYear>2027</TimelineYear>
            </Margin>
        </TimelineWrapper>
    </React.Fragment>
)

export default Timeline
