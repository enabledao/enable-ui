import Crowdloan from '@enabledao/enable-contracts/build/contracts/Crowdloan.json';
import CrowdloanFactory from '@enabledao/enable-contracts/build/contracts/CrowdloanFactory.json';
import ERC20 from '@enabledao/enable-contracts/build/contracts/ERC20.json';
import ERC20Detailed from '@enabledao/enable-contracts/build/contracts/ERC20Detailed.json';
import TokenFaucet from '@enabledao/enable-contracts/build/contracts/TokenFaucet.json';
import ICrowdloan from '@enabledao/enable-contracts/build/contracts/ICrowdloan.json';
import IERC20 from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import IRepaymentManager from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import ITermsContract from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import RepaymentManager from '@enabledao/enable-contracts/build/contracts/RepaymentManager.json';
import TermsContract from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import TermsContractLib from '@enabledao/enable-contracts/build/contracts/RepaymentManager.json';

const ContractNames = {
  Crowdloan: "Crowdloan",
  TermsContract: "TermsContract",
  CrowdloanFactory: "CrowdloanFactory",
  RepaymentManager: "RepaymentManager"
};

const ContractAbis = {
  Crowdloan: Crowdloan.abi,
  CrowdloanFactory: CrowdloanFactory.abi,
  TokenFaucet: TokenFaucet.abi,
  TermsContract: TermsContract.abi,
  RepaymentManager: RepaymentManager.abi
};

export {
  ContractNames,
  ContractAbis,
  //Contracts
  Crowdloan,
  CrowdloanFactory,
  ERC20,
  ERC20Detailed,
  TokenFaucet,
  ICrowdloan,
  IERC20,
  IRepaymentManager,
  ITermsContract,
  RepaymentManager,
  TermsContract,
  TermsContractLib
 };
