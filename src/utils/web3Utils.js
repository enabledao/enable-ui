import Web3 from 'web3';
import getWeb3 from './getWeb3';

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

const prepNumber = (number, decimals, inbound) => {
    const bnNumber = Web3.utils.toBN(number);
    const bnDecimals = Web3.utils.toBN(10).pow(Web3.utils.toBN(decimals || 0));
    return (inbound ? bnNumber.div(bnDecimals) : bnNumber.mul(bnDecimals)).toString();
}

export {
    contractMethodCall,
    getNetworkId,
    prepNumber
}