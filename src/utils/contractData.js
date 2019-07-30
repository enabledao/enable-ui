import Crowdloan from "@enabledao/enable-contracts/build/contracts/Crowdloan.json";
import TermsContract from "@enabledao/enable-contracts/build/contracts/TermsContract.json";
import RepaymentManager from "@enabledao/enable-contracts/build/contracts/RepaymentManager.json";
import CrowdloanFactory from "@enabledao/enable-contracts/build/contracts/CrowdloanFactory.json";

const ContractNames = {
  Crowdloan: "Crowdloan",
  TermsContract: "TermsContract",
  CrowdloanFactory: "CrowdloanFactory",
  RepaymentManager: "RepaymentManager"
};

const ContractAbis = {
  Crowdloan: Crowdloan,
  TermsContract: TermsContract,
  CrowdloanFactory: CrowdloanFactory,
  RepaymentManager: RepaymentManager
};

export { ContractNames, ContractAbis };
