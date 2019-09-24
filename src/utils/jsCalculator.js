import { ZERO, HUNDRED, MONTHS_IN_YEAR } from '../config/constants'
import { BN, prepBigNumber } from './web3Utils'
import Web3 from 'web3'

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
        totalAmount: calcTotalInterest(
            contribution,
            principalRequested,
            interestRate,
            salary || expectedSalary,
            loanPeriod
        ),
        percentage: calcRatioOfIncome(
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
) =>
    BN(contribution || 0)
        .mul(BN(expectedIncome || 0))
        .mul(BN(shareRate || 0))
        .div(BN(HUNDRED).mul(BN(totalContribution || 0)))
        .toString()

const calcTotalInterest = (
    contribution,
    totalContribution,
    shareRate,
    expectedIncome,
    loanPeriod
) =>
    BN(calcInterest(contribution, totalContribution, shareRate, expectedIncome))
        .mul(BN(loanPeriod || 0))
        .div(BN(MONTHS_IN_YEAR))
        .toString()

const calcPercentageOfIncome = (
    contribution,
    totalContribution,
    shareRate,
    expectedIncome
) =>
    BN(
        calcInterest(contribution, totalContribution, shareRate, expectedIncome)
    ).mul(BN(HUNDRED)) / expectedIncome

export {
    availableWithdrawal,
    simulateTotalInterest,
    calcInterest,
    simulateInterest2,
    calcTotalInterest,
    calcPercentageOfIncome,
}
