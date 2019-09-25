/**
 * ISA Constants
 * NOTE(Dan): This is a placeholder for ISA constants
 * TODO(Dan): For subsequent iterations this should be retrieved from IPFS or Smart Contract
 */
import { BN } from '../utils/web3Utils'
import Web3 from 'web3'

const ISA_FUNDRAISING_TARGET = BN(Web3.utils.toWei('60000', 'ether'))
const ISA_PERCENTAGE = BN(18) // TODO(Dan): Should refactor into a rate? Because it is inherently tied to fundraising amount
const ISA_INVESTMENT_RATE = 0.000003 // TODO(Dan): Refactor, as decimals cannot be represented in big numbers (consider: basis points?)
const ISA_MIN_REPAYMENT = BN(Web3.utils.toWei('65000', 'ether'))
const ISA_MAX_REPAYMENT = BN(Web3.utils.toWei('90000', 'ether'))
const ISA_DURATION_MONTHS = 72
const ISA_EXPECTED_SALARY = BN(Web3.utils.toWei('86320', 'ether'))

export {
    ISA_PERCENTAGE,
    ISA_INVESTMENT_RATE,
    ISA_MIN_REPAYMENT,
    ISA_MAX_REPAYMENT,
    ISA_DURATION_MONTHS,
    ISA_FUNDRAISING_TARGET,
    ISA_EXPECTED_SALARY,
}
