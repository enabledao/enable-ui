/**
 * TODO(Dan, Anthony): These values are hardcoded for the POC loan, but should be read from the smart contract OR IPFS metadata in the future
 * @param {*} loanMetadataUrl
 */
import Web3 from "web3";

const fetchLoanMetadata = loanMetadataUrl => null;
const getIncomeSharePercentage = loanMetadata => "18";
const getLoanPeriod = loanMetadata => "72";
const getMinimumRepayment = loanMetadata => Web3.utils.toWei("50000", "ether");
const getExpectedSalary = loanMetadata => Web3.utils.toWei("86320", "ether");
const getRepaymentStart = loanMetadata => "1609455600";

export {
    fetchLoanMetadata,
    //Extract info from data
    getIncomeSharePercentage,
    getMinimumRepayment,
    getLoanPeriod,
    getExpectedSalary,
    getRepaymentStart
};
