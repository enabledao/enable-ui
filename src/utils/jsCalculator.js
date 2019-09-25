import {
    ZERO,
    HUNDRED,
    MONTHS_IN_YEAR,
    ISA_PERCENTAGE_DECIMALS,
} from '../config/constants'
import { BN, prepBigNumber } from './web3Utils'
import { formatBN } from './formatters'
import Web3 from 'web3'
import {
    ISA_PERCENTAGE,
    ISA_INVESTMENT_RATE,
    ISA_MIN_REPAYMENT,
    ISA_MAX_REPAYMENT,
    ISA_DURATION_MONTHS,
    ISA_FUNDRAISING_TARGET,
    ISA_EXPECTED_SALARY,
} from '../config/isaConstants'

const convertPaddedBN = num => BN(Web3.utils.toWei(num.toString(), 'ether'))

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

const calcIncomeSharePercentage = investmentAmount => {
    const paddedInvestmentAmount = convertPaddedBN(investmentAmount)

    // TODO(Dan): Rename b/c we are not using traditional basis points (we need 3 precision)
    const incomeShareBasisPoints = paddedInvestmentAmount
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
    console.log(incomeSharePercentage)
    console.log(salary)
    return formatBN(
        ((salary * incomeSharePercentage * ISA_DURATION_MONTHS) / 12).toFixed(2)
    )
}

const calcMinRepayment = investmentAmount => {
    const paddedInvestmentAmount = convertPaddedBN(investmentAmount)
    const paddedMinRepayment = ISA_MIN_REPAYMENT.mul(paddedInvestmentAmount)
        .div(ISA_FUNDRAISING_TARGET)
        .toString()
    return formatBN(
        parseFloat(Web3.utils.fromWei(paddedMinRepayment, 'ether')).toFixed(2)
    )
}

const calcMaxRepayment = investmentAmount => {
    const paddedInvestmentAmount = convertPaddedBN(investmentAmount)
    const paddedMinRepayment = ISA_MAX_REPAYMENT.mul(paddedInvestmentAmount)
        .div(ISA_FUNDRAISING_TARGET)
        .toString()
    return formatBN(
        parseFloat(Web3.utils.fromWei(paddedMinRepayment, 'ether')).toFixed(2)
    )
}

const calcEstimatedMonthlyRepayment = (investmentAmount, simulatedSalary) => {
    const paddedInvestmentAmount = convertPaddedBN(investmentAmount)
    const paddedMinRepayment = ISA_MAX_REPAYMENT.mul(paddedInvestmentAmount)
        .div(ISA_FUNDRAISING_TARGET)
        .toString()
    return formatBN(
        parseFloat(Web3.utils.fromWei(paddedMinRepayment, 'ether')).toFixed(2)
    )
}

export {
    availableWithdrawal,
    calcInterest,
    calcExpectedReturn,
    calcIncomeSharePercentage,
    calcExpectedTotalReturn,
    calcEstimatedMonthlyRepayment,
    calcMinRepayment,
    calcMaxRepayment,
}
