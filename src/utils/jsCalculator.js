import { ZERO, HUNDRED, MONTHS_IN_YEAR } from '../config/constants'
import { BN, prepBigNumber } from './web3Utils'
import Web3 from 'web3'
import {
    isaPercentage,
    isaRate,
    minRepayment,
    maxRepayment,
    isaDurationMonths,
    fundraisingTarget,
} from '../config/isaConstants'

const simulateTotalInterest = (contribution, interestRate, loanPeriod) => {
    return (
        Math.floor(
            (+contribution * (+interestRate || 0) * (+loanPeriod || 0)) /
                (12 * 100)
        ) || 0
    )
}

const availableWithdrawal = (
    amountContributed,
    totalContributed,
    amountRepaid,
    repaymentWithdrawn
) =>
    prepBigNumber(
        Math.floor(
            (amountContributed / totalContributed) * amountRepaid -
                repaymentWithdrawn
        ),
        ZERO
    )

/** TODO(Dan): Refactor the convoluted simulateInterest passing into helper method
 *
 */
const simulateInterest2 = (
    contribution,
    salary,
    interestRate,
    principalRequested,
    expectedSalary,
    loanPeriod
) => {
    return {
        totalAmount: calcExpectedReturn(
            contribution,
            principalRequested,
            interestRate,
            salary || expectedSalary,
            loanPeriod
        ),
        percentage: calcIncomeSharePercentage(
            contribution,
            principalRequested,
            interestRate,
            salary || expectedSalary
        ),
    }
}

const calcInterest = (
    contribution,
    totalContribution,
    shareRate,
    expectedIncome
) => {
    // console.log('--------')
    // console.log(contribution)
    // console.log(totalContribution)
    // console.log(shareRate)
    // console.log(expectedIncome)
    return BN(contribution || 0)
        .mul(BN(expectedIncome || 0))
        .mul(BN(shareRate || 0))
        .div(BN(HUNDRED).mul(BN(totalContribution || 0)))
        .toString()
}

const calcExpectedReturn = (
    contribution,
    principalRequested,
    shareRate,
    expectedIncome,
    loanPeriod
) => {
    return BN(
        calcInterest(
            contribution,
            principalRequested,
            shareRate,
            expectedIncome
        )
    )
        .mul(BN(loanPeriod || 0))
        .div(BN(MONTHS_IN_YEAR))
        .toString()
}

const calcIncomeSharePercentage = contribution => {
    const incomeShareBasisPoints = BN(contribution || 0)
        .mul(isaPercentage)
        .mul(BN(100)) // in basis points because of BN.js
        .div(BN(fundraisingTarget))
        .toNumber()
    const incomeSharePercentage = incomeShareBasisPoints / 100
    return incomeSharePercentage
}

const calcEstimatedMonthlyRepayment = () => {}

export {
    availableWithdrawal,
    simulateTotalInterest,
    calcInterest,
    simulateInterest2,
    calcExpectedReturn,
    calcIncomeSharePercentage,
}
