import Web3 from 'web3';
import getWeb3 from './getWeb3';

const getAccounts = async (web3) => {
    web3 = web3 || await getWeb3();
    return await web3.eth.getAccounts();
}

const getNetworkId = async (web3) => {
    web3 = web3 || await getWeb3();
    return await web3.eth.net.getId();
}

const contractMethodCall = async (contract, method, ...args) => {
    await getWeb3();//Ensure Web3 is fully loaded
    try{
        return await contract.methods[method](...args).call();
    } catch (e) {
        console.error(method, ...args);
        console.error(e);
        throw(e)
    }
}

const prepBigNumber = (number, decimals, inbound) => {//No Decimals in BigNumbers
    const bnNumber = Web3.utils.toBN(number);
    const bnDecimals = Web3.utils.toBN(10).pow(Web3.utils.toBN(decimals || 0));
    return (inbound ? bnNumber.div(bnDecimals) : bnNumber.mul(bnDecimals)).toString();
}

const prepNumber = (number, decimals, inbound) => {//Allows Decimals
    decimals = Math.pow(10, Number(decimals || 0));
    return (inbound ? Number(number)/ (decimals) : number * decimals).toString();
}

export {
    contractMethodCall,
    getAccounts,
    getNetworkId,
    prepBigNumber,
    prepNumber
}