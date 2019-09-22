const INTEREST_DECIMALS = 2;
const LoanStatuses = {
    NOT_STARTED: 'Funding not started',
    FUNDING_STARTED: "Funding",
    FUNDING_FAILED: "Funding Failed",
    REPAYMENT_CYCLE: "Repayment Cycle",
    REPAYMENT_COMPLETE:  "Repayment Complete"
};
const ZERO = 0;
const HUNDRED = 100;
const MILLISECONDS = 1000;
const MONTHS_IN_YEAR = 12;

export {
    INTEREST_DECIMALS,
    LoanStatuses,
    MILLISECONDS,
    MONTHS_IN_YEAR,
    ZERO,
    HUNDRED
}