import {
    HUNDRED,
    MONTHS_IN_YEAR,
    ISA_PERCENTAGE_DECIMALS,
} from '../config/constants'
import { BN } from './web3Utils'
import { formatBN } from './formatters'
import Web3 from 'web3'
import {
    ISA_PERCENTAGE,
    ISA_MIN_REPAYMENT,
    ISA_MAX_REPAYMENT,
    ISA_DURATION_MONTHS,
    ISA_FUNDRAISING_TARGET,
} from '../config/isaConstants'

const convertPaddedBN = num => BN(Web3.utils.toWei(num.toString(), 'ether'))

const availableWithdrawal = (
    amountContributed,
    totalContributed,
    amountRepaid,
    repaymentWithdrawn
) =>    BN(amountContributed || 0).mul(BN(amountRepaid || 0)).div(BN(totalContributed || 0))
            .sub(BN(repaymentWithdrawn || 0))

const calcInterest = (
    contribution,
    totalContribution,
    shareRate,
    expectedIncome
) => {
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
    //TODO(Dan): Refactor to prevent multiple calculations using BN
    // incomesharepercentage*salary

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

const formatPaddedBN = bn => {
    return parseFloat(Web3.utils.fromWei(bn.toString(), 'ether')).toFixed(2)
}

const simulateReturns = (investmentAmount, salary) => {
    const minRepayment = formatPaddedBN(calcMinRepayment(investmentAmount))
    const maxRepayment = formatPaddedBN(calcMaxRepayment(investmentAmount))
    const incomeSharePercentage = calcIncomeSharePercentage(investmentAmount)
    const incomeShareAmount = (
        (((salary * incomeSharePercentage) / 100) * ISA_DURATION_MONTHS) /
        12
    ).toFixed(2)
    let expectedTotalReturn = parseFloat(incomeShareAmount)
    if (expectedTotalReturn > parseFloat(maxRepayment))
        expectedTotalReturn = maxRepayment
    if (expectedTotalReturn < parseFloat(minRepayment))
        expectedTotalReturn = minRepayment
    const simulatedMonthlyRepayment = (
        expectedTotalReturn / ISA_DURATION_MONTHS
    ).toFixed(2)

    return {
        minRepayment: formatBN(minRepayment),
        maxRepayment: formatBN(maxRepayment),
        incomeSharePercentage,
        expectedTotalReturn: formatBN(expectedTotalReturn.toString()),
        simulatedMonthlyRepayment: formatBN(simulatedMonthlyRepayment),
    }
}

const calcIncomeSharePercentage = investmentAmount => {
    const paddedInvestmentAmount = convertPaddedBN(investmentAmount)
    const incomeShareBasisPoints = paddedInvestmentAmount // TODO(Dan): Rename b/c we are not using traditional basis points (we need 3 precision)
        .mul(ISA_PERCENTAGE)
        .mul(BN(10 ** ISA_PERCENTAGE_DECIMALS)) // in because of BN.js
        .div(BN(ISA_FUNDRAISING_TARGET))
        .toNumber()
    const incomeSharePercentage =
        incomeShareBasisPoints / 10 ** ISA_PERCENTAGE_DECIMALS
    return incomeSharePercentage
}

const calcExpectedTotalReturn = (investmentAmount, salary) => {
    //TODO(Dan): Refactor calcIncomeSharePercentage and this method to reduce duplicate calculation
    const incomeSharePercentage =
        calcIncomeSharePercentage(investmentAmount) / 100
    return formatBN(
        ((salary * incomeSharePercentage * ISA_DURATION_MONTHS) / 12).toFixed(2)
    )
}

const calcMinRepayment = investmentAmount => {
    const paddedInvestmentAmount = convertPaddedBN(investmentAmount)
    return ISA_MIN_REPAYMENT.mul(paddedInvestmentAmount).div(
        ISA_FUNDRAISING_TARGET
    )
}

const calcMaxRepayment = investmentAmount => {
    const paddedInvestmentAmount = convertPaddedBN(investmentAmount)
    return ISA_MAX_REPAYMENT.mul(paddedInvestmentAmount).div(
        ISA_FUNDRAISING_TARGET
    )
}

export {
    availableWithdrawal,
    simulateReturns,
    calcInterest,
    calcExpectedReturn,
    calcIncomeSharePercentage,
    calcExpectedTotalReturn,
    calcMinRepayment,
    calcMaxRepayment,
}
