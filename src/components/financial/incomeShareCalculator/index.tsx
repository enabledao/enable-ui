import React from 'react'
import { TextField, Button } from '../../lib'
import { Margin, Padding } from '../../../styles/utils'
import CornellLogo from '../../../images/cornell.png'
import {
    SliderInput,
    SliderMinMax,
    ButtonLendSimulation,
    SimulationWrapper,
} from './styled'
import { formatBN } from '../../../utils/formatters'
import { simulateReturns } from '../../../utils/jsCalculator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'

interface IncomeShareCalculatorProps {
    investmentAmount?: number
}
interface IncomeShareCalculatorState {
    salary: number
    salaryMin: number
    salaryMax: number
}

class IncomeShareCalculator extends React.Component<
    IncomeShareCalculatorProps,
    IncomeShareCalculatorState
> {
    constructor(props: IncomeShareCalculatorProps) {
        super(props)
        this.state = {
            salary: 86320,
            salaryMin: 25000,
            salaryMax: 120000,
        }
    }

    handleChangeSalary = e => {
        this.setState({
            salary: Number(e.target.value),
        })
    }

    render() {
        const { investmentAmount } = this.props
        const { salaryMin, salaryMax, salary } = this.state
        const {
            minRepayment,
            maxRepayment,
            incomeSharePercentage,
            expectedTotalReturn,
            simulatedMonthlyRepayment,
        } = simulateReturns(investmentAmount, salary)

        return (
            <React.Fragment>
                <SimulationWrapper>
                    <Margin>
                        {/* <Margin top={8}>
                            <h6>Investment Amount</h6>
                            <TextField
                                type="number"
                                placeholder="e.g. 5,000"
                                value={
                                    investmentAmount === 0
                                        ? ''
                                        : investmentAmount
                                }
                                onChange={this.handleChangeInvestmentAmount}
                            />
                        </Margin> */}
                        <Margin top={10}>
                            <p style={{ display: 'inline-block' }}>
                                Repayment Floor
                            </p>
                            <p style={{ float: 'right' }}>
                                <b>{minRepayment} Dai</b>
                            </p>
                        </Margin>
                        <Margin bottom={8}>
                            <p style={{ display: 'inline-block' }}>
                                Repayment Ceiling
                            </p>
                            <p style={{ float: 'right' }}>
                                <b>{maxRepayment} Dai</b>
                            </p>
                        </Margin>
                    </Margin>
                    <hr />
                    <Margin top={18}>
                        <h6>Simulate Salary</h6>
                        <Margin top={10}>
                            <p style={{ display: 'inline-block' }}>
                                Average Annual Salary
                            </p>
                            <p style={{ float: 'right' }}>
                                ${formatBN(salary.toString())}
                            </p>
                        </Margin>
                        <Margin top={20}>
                            <SliderInput
                                type="range"
                                min={salaryMin}
                                max={salaryMax}
                                value={salary}
                                onChange={this.handleChangeSalary}
                            />
                            <SliderMinMax>
                                <p>Below Average</p>
                                <p>Above Average</p>
                            </SliderMinMax>
                        </Margin>
                        <Margin top={14} bottom={24}>
                            <div style={{ position: 'absolute' }}>
                                <img src={CornellLogo} alt="cornell - logo" />
                            </div>
                            <Padding left={80}>
                                <small>
                                    Based on{' '}
                                    <a
                                        href="https://www.ilr.cornell.edu/sites/default/files/ILR_CS_MastersDataBrochure2018%20Final_0.pdf
"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        reported 2018 median salary of $86,320{' '}
                                    </a>{' '}
                                    of graduates of Cornell University ILR
                                    program
                                </small>
                            </Padding>
                        </Margin>
                    </Margin>
                    <hr />
                    <Margin top={18}>
                        <p
                            data-for="income-ownership-tooltip"
                            data-tip="This represents % of borrower's future income"
                            style={{ display: 'inline-block' }}
                        >
                            Income Ownership{' '}
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </p>
                        <ReactTooltip id="income-ownership-tooltip" />
                        <p style={{ float: 'right' }}>
                            <b>{incomeSharePercentage}%</b> of 18%
                        </p>
                    </Margin>
                    <Margin>
                        <p style={{ display: 'inline-block' }}>
                            Simulated Monthly Payment
                        </p>
                        <p style={{ float: 'right' }}>
                            {simulatedMonthlyRepayment} Dai
                        </p>
                    </Margin>
                    <Margin>
                        <p style={{ display: 'inline-block' }}>Duration</p>
                        <p style={{ float: 'right' }}>6 years</p>
                    </Margin>

                    <Margin vertical={24}>
                        <h4>
                            {expectedTotalReturn}
                            &nbsp;<small>Dai</small>
                        </h4>
                        <small>Simulated Total Return</small>
                    </Margin>
                    {/* <ButtonLendSimulation>
                        <Margin vertical={24}>
                            <Button color="green" onClick={this.handleLend}>
                                Invest Now
                            </Button>
                        </Margin>
                    </ButtonLendSimulation> */}
                    {/* </Col>
                    </Row> */}
                </SimulationWrapper>
            </React.Fragment>
        )
    }
}

export default IncomeShareCalculator
