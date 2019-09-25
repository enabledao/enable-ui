/**
 * TODO(Dan, Anthony): These values are hardcoded for the POC loan, but should be read from the smart contract OR IPFS metadata in the future
 * @param {*} loanMetadataUrl
 */
import {
    ISA_PERCENTAGE,
    ISA_MIN_REPAYMENT,
    ISA_DURATION_MONTHS,
    ISA_EXPECTED_SALARY,
} from '../config/isaConstants'

const fetchLoanMetadata = loanMetadataUrl => null
const getIncomeSharePercentage = loanMetadata => ISA_PERCENTAGE.toString()
const getLoanPeriod = loanMetadata => ISA_DURATION_MONTHS.toString()
const getMinimumRepayment = loanMetadata => ISA_MIN_REPAYMENT.toString()
const getExpectedSalary = loanMetadata => ISA_EXPECTED_SALARY.toString()
const getRepaymentStart = loanMetadata => '1609455600'

export {
    fetchLoanMetadata,
    //Extract info from data
    getIncomeSharePercentage,
    getMinimumRepayment,
    getLoanPeriod,
    getExpectedSalary,
    getRepaymentStart,
}
