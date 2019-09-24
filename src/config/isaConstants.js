/**
 * ISA Constants
 * NOTE(Dan): This is a placeholder for ISA constants
 * TODO(Dan): For subsequent iterations this should be retrieved from IPFS or Smart Contract
 */
import { BN } from '../utils/web3Utils'
import Web3 from 'web3'

const fundraisingTarget = BN(Web3.utils.toWei('60000', 'ether'))
const isaPercentage = BN(18) // TODO(Dan): Should refactor into a rate? Because it is inherently tied to fundraising amount
const isaRate = 0.000003 // TODO(Dan): Refactor, as decimals cannot be represented in big numbers (consider: basis points?)
const minRepayment = BN(Web3.utils.toWei('50000', 'ether'))
const maxRepayment = BN(Web3.utils.toWei('90000', 'ether'))
const isaDurationMonths = 72
const expectedSalary = BN(Web3.utils.toWei('86320', 'ether'))

export {
    isaPercentage,
    isaRate,
    minRepayment,
    maxRepayment,
    isaDurationMonths,
    fundraisingTarget,
}
