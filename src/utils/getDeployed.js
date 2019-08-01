import fs from "fs";
import Web3 from "web3";
import { ContractNames, ContractAbis } from "./contractData";

const getDeployed = async (web3, contractName) => {
  const artifact = getArtifactByContractName(contractName);
  const address = getDeployedAddress(web3, contractName);
  const instance = await web3.eth.Contract(artifact.abi, address);

  return instance;
};

const getArtifactByContractName = contractName => {
  if (ContractAbis[contractName]) {
    return ContractAbis[contractName];
  } else {
    throw new Error("Abi for specified contract name not found");
  }
};

const getDeployedAddress = async (web3, contractName) => {
  if (ContractAbis[contractName]) {
    return ContractAbis[contractName];
  } else {
    throw new Error("Abi for specified contract name not found");
  }
};

const getContractAt = async (web3, contractType, address) => {
  const artifact = getArtifactByContractName(contractType);
  const instance = await new web3.eth.Contract(artifact.abi, address);
  return instance;
};

/*
 *  Find zos config file name for specified network
 *  Hacky: Assume public networks for known network IDs
 */
const resolveNetworkFilename = networkId => {
  switch (networkId) {
    case 1:
      return "mainnet";
    case 3:
      return "ropsten";
    case 4:
      return "rinkeby";
    case 42:
      return "kovan";
    default:
      return `dev-${networkId}`;
  }
};

/*
 *  Get zos config info for specified networkId.
 */
function getOZNetworkConfig(networkId) {
  const networkName = resolveNetworkFilename(networkId);
  const zosNetworkFile = fs.readFileSync(
    `./node_modules/@enabledao/enable-contracts/.openzeppelin/${networkName}.json`
  );

  if (zosNetworkFile) {
  } else {
    throw new `No network file found for specified networkId, looking for ${networkName}.json at `();
  }

  return JSON.parse(zosNetworkFile);
}

export default getDeployed;
export { getOZNetworkConfig, getContractAt };
