import getWeb3 from './getWeb3';

const getNetworkId = async (web3) => {
    web3 = web3 || await getWeb3();
    return await web3.eth.net.getId();
}

export {
    getNetworkId
}