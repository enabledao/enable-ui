const LoanStatuses = {
    NOT_STARTED: 'Funding not started',
    FUNDING_STARTED: 'Funding',
    FUNDING_FAILED: 'Funding Failed',
    REPAYMENT_CYCLE: 'Repayment Cycle',
    REPAYMENT_COMPLETE: 'Repayment Complete',
}
const ZERO = 0
const HUNDRED = 100
const MILLISECONDS = 1000
const MONTHS_IN_YEAR = 12
const INFURA_PROVIDER = 'https://kovan.infura.io/v3/'
const ISA_PERCENTAGE_DECIMALS = 3

export {
    ISA_PERCENTAGE_DECIMALS,
    INFURA_PROVIDER,
    LoanStatuses,
    MILLISECONDS,
    MONTHS_IN_YEAR,
    ZERO,
    HUNDRED,
}
