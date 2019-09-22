/**
 * TODO(Dan, Anthony): These values are hardcoded for the POC loan, but should be read from the smart contract OR IPFS metadata in the future
 * @param {*} loanMetadataUrl
 */
const fetchLoanMetadata = loanMetadataUrl => null;
const getIncomeSharePercentage = loanMetadata => "18";
const getLoanEndTimestamp = (loanMetadata, loanStartTimestamp) =>
    getRepaymentStart(loanMetadata) + getLoanPeriod(loanMetadata) * 30 * 86400;
const getMinimumRepayment = loanMetadata => "50000000000000000000000";
const getLoanPeriod = loanMetadata => "72";
const getExpectedSalary = loanMetadata => "86320000000000000000000";
const getRepaymentStart = loanMetadata => "1609455600";

export {
    fetchLoanMetadata,
    //Extract info from data
    getIncomeSharePercentage,
    getLoanEndTimestamp,
    getMinimumRepayment,
    getLoanPeriod,
    getExpectedSalary,
    getRepaymentStart
};
