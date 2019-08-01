import getWeb3 from './getWeb3';
import * as Contracts from "./contractData";
import { ContractNames, ContractAbis } from "./contractData";

const ENABLE_CREDIT_PACKAGE = 'enable-credit';

const getArtifactByContractName = contractName => {
  if (Contracts[contractName]) {
    return Contracts[contractName];
  } else {
    throw new Error("Abi for specified contract name not found");
  }
};

const getDeployedAddress = async (contractName, web3) => {
  const artifact = getArtifactByContractName(contractName);
  web3 = web3 || await getWeb3();
  const networkId = await web3.eth.net.getId();
  const deployedInstance = artifact.networks[networkId];
  if (deployedInstance) {
      return deployedInstance.address;
  } else {
      const ozConfig = getOZNetworkConfig(networkId);
      const factories = ozConfig.proxies[`${ENABLE_CREDIT_PACKAGE}/${contractName}`];
      if (factories && factories.length) {
          return factories[factories.length - 1].address;
      } else {
          throw new Error (`${contractName} not deployed to network`);
      }
  }
};

const getContractInstance = async (abi, address, web3) => {
  web3 = web3 || await getWeb3();
  return new web3.eth.Contract(abi, address);
}

const getContractTypeAt = async (contractType, address, web3) => {
  web3 = web3 || await getWeb3();
  const artifact = getArtifactByContractName(contractType);
  return getContractInstance(artifact.abi, address, web3);
};

const getDeployed = async (web3, contractName) => {
  const address = getDeployedAddress(contractName, web3);
  return getContractTypeAt(contractName, address, web3);
};

async function getCrowdloanFactory (address, web3) {
  const name = 'CrowdloanFactory';
  try {
    if (!address) {
      address = await getDeployedAddress(ContractNames[name], web3);
    }
    return await getContractInstance(ContractAbis[name], address, web3);
  } catch (e) {console.error(e)}
}

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
  const ozConfig = require(`@enabledao/enable-contracts/.openzeppelin/${networkName}.json`);

  if (!ozConfig) {
    throw new `No network file found for specified networkId, looking for ${networkName}.json at `();
  }

  return JSON.parse(ozConfig);
}

export default getDeployed;
export { getOZNetworkConfig, getContractInstance, getContractTypeAt, getCrowdloanFactory };
