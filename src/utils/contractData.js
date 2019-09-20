import Crowdloan from "@enabledao/enable-contracts/build/contracts/Crowdloan.json";
import CrowdloanFactory from "@enabledao/enable-contracts/build/contracts/CrowdloanFactory.json";
import ERC20 from "@enabledao/enable-contracts/build/contracts/ERC20.json";
import ERC20Detailed from "@enabledao/enable-contracts/build/contracts/ERC20Detailed.json";
import TokenFaucet from "@enabledao/enable-contracts/build/contracts/TokenFaucet.json";
import IERC20 from "@enabledao/enable-contracts/build/contracts/IERC20.json";

const ContractNames = {
  Crowdloan: "Crowdloan",
  CrowdloanFactory: "CrowdloanFactory"
};

const ContractAbis = {
  Crowdloan: Crowdloan.abi,
  CrowdloanFactory: CrowdloanFactory.abi,
  TokenFaucet: TokenFaucet.abi
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
  IERC20
};
