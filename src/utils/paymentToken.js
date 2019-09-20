import getWeb3 from "./getWeb3";
import { getContractInstance } from "./getDeployed";
import {
  contractMethodCall,
  contractMethodTransaction,
  getInjectedAccountAddress
} from "./web3Utils";
import { ERC20Detailed } from "./contractData";

const getTokenDetailsFromAddress = async (address, web3) => {
  web3 = web3 || (await getWeb3());
  const contract = await getContractInstance(ERC20Detailed.abi, address, web3);
  return {
    address,
    balanceOf: await balanceOf(contract, await getInjectedAccountAddress()),
    decimals: await decimals(contract)
  };
};

const getInstance = async address =>
  await getContractInstance(ERC20Detailed.abi, address);

const balanceOf = (instance, address) =>
  contractMethodCall(instance, "balanceOf", address);
const decimals = instance => contractMethodCall(instance, "decimals");
const name = instance => contractMethodCall(instance, "name");
const symbol = instance => contractMethodCall(instance, "symbol");
const allowance = (instance, owner, spender) =>
  contractMethodCall(instance, "allowance", owner, spender);
const approve = (instance, recipient, amount, txOptions) =>
  contractMethodTransaction(instance, "approve", recipient, amount, txOptions);

export {
  //Basic functions
  allowance,
  balanceOf,
  decimals,
  name,
  symbol,
  //Derivatives
  getInstance,
  getTokenDetailsFromAddress,
  //Transactions
  approve
};
