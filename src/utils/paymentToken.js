import getWeb3 from './getWeb3';
import { getContractInstance } from './getDeployed';
import { contractMethodCall, getAccounts } from './web3Utils';
import { ERC20Detailed } from './contractData';

const balanceOf = (instance, address) =>  contractMethodCall(instance, 'balanceOf', address);
const decimals = instance =>  contractMethodCall(instance, 'decimals');
const name = instance =>  contractMethodCall(instance, 'name');
const symbol = instance =>  contractMethodCall(instance, 'symbol');

const getTokenDetailsFromAddress = async (address, web3) => {
    web3 = web3 || await getWeb3();
    const accounts = await getAccounts(web3);
    const contract = await getContractInstance(ERC20Detailed.abi, address, web3);
    return {
        balanceOf: await balanceOf(contract, accounts[0]),
        decimals: await decimals(contract),
    };
}

export {
    //Basic functions
    balanceOf,
    decimals,
    name,
    symbol,
    //Derivatives
    getTokenDetailsFromAddress
}