const INTEREST_DECIMALS = 2;
const LoanStatuses = {
    NOT_STARTED: 0,
    FUNDING_STARTED: 1,
    FUNDING_FAILED: 2,
    FUNDING_COMPLETE: 3,
    REPAYMENT_CYCLE: 4,
    REPAYMENT_COMPLETE: 5
};
const MILLISECONDS = 1000;

export {
    INTEREST_DECIMALS,
    LoanStatuses,
    MILLISECONDS
}