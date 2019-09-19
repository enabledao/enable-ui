import{ ZERO } from '../config/constants';
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

export {
    availableWithdrawal,
    simulateTotalInterest
}