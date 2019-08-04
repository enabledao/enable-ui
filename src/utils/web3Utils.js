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

const getInjectedAccountAddress = async (web3, accountNumber) => {
    web3 = web3 || await getWeb3();
    return  accountNumber ? ((await web3.eth.getAccounts())[accountNumber]) : ((await web3.eth.getAccounts())[0]);
}

export {
    contractMethodCall,
    getInjectedAccountAddress,
    getNetworkId
}
