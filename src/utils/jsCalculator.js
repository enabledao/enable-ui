import{ ZERO, HUNDRED, MONTHS_IN_YEAR } from '../config/constants';
import { prepBigNumber } from "./web3Utils"

const simulateTotalInterest = (contribution, interestRate, loanPeriod) => {
    return Math.floor(+contribution * (+interestRate || 0) * (+loanPeriod||0) /( 12 * 100)) || 0
}

const availableWithdrawal = (amountContributed, totalContributed, amountRepaid, repaymentWithdrawn) =>
    prepBigNumber(
        Math.floor((
            (amountContributed/ totalContributed) *
            amountRepaid
        ) - repaymentWithdrawn),
        ZERO
    );

const calcInterest = (contribution, totalContribution, shareRate, expectedIncone) =>
    (+contribution / +totalContribution) || 0 * (
        (+expectedIncone * +shareRate) || 0 / HUNDRED
    );

const calcTotalInterest = (contribution, totalContribution, shareRate, expectedIncone, loanPeriod) =>
    (calcInterest(contribution, totalContribution, shareRate, expectedIncone) * loanPeriod) || 0 / MONTHS_IN_YEAR

const calcRatioOfIncome = (contribution, totalContribution, shareRate, expectedIncome) =>
    (
        calcInterest(contribution, totalContribution, shareRate, expectedIncome)
        / expectedIncone
    );

const calcRatioOfTotalIncome = (contribution, totalContribution, shareRate, expectedIncome, loanPeriod) =>
    (
        calcTotalInterest(contribution, totalContribution, shareRate, expectedIncome, loanPeriod)
        / expectedIncone * loanPeriod
    );

export {
    availableWithdrawal,
    simulateTotalInterest,
    calcInterest,
    calcTotalInterest,
    calcRatioOfIncome,
    calcRatioOfTotalIncome
}