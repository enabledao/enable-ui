import Crowdloan from '@enabledao/enable-contracts/build/contracts/Crowdloan.json';
import CrowdloanFactory from '@enabledao/enable-contracts/build/contracts/CrowdloanFactory.json';
import ERC20 from '@enabledao/enable-contracts/build/contracts/ERC20.json';
import ERC20Detailed from '@enabledao/enable-contracts/build/contracts/ERC20Detailed.json';
import ICrowdloan from '@enabledao/enable-contracts/build/contracts/ICrowdloan.json';
import IERC20 from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import IRepaymentManager from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import ITermsContract from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import RepaymentManager from '@enabledao/enable-contracts/build/contracts/RepaymentManager.json';
import TermsContract from '@enabledao/enable-contracts/build/contracts/TermsContract.json';
import TermsContractLib from '@enabledao/enable-contracts/build/contracts/RepaymentManager.json';

import getWeb3 from './getWeb3';

const ENABLE_CREDIT_PACKAGE = 'enable-credit';

function resolveNetworkFilename(networkId) {
    switch (networkId) {
      case 1:
        return 'mainnet';
      case 3:
        return 'ropsten';
      case 4:
        return 'rinkeby';
      case 42:
        return 'kovan';
      default:
        return `dev-${networkId}`;
    }
}

async function instantiateContract (abi, address) {
    const web3 = await getWeb3();
    return new web3.eth.Contract(abi, address);
}

async function getCrowdloanFactory (address) {
    try {
        if (address) {
            return await instantiateContract(CrowdloanFactory.abi, address);
        } else {
            const web3 = await getWeb3();
            const networkId = await web3.eth.net.getId();
            const deployedInstance = CrowdloanFactory.networks[networkId];
            if (deployedInstance) {
                return await instantiateContract(CrowdloanFactory.abi, deployedInstance.address)
            } else {
                const zosConfig = require(`@enabledao/enable-contracts/zos.${resolveNetworkFilename(networkId)}.json`);
                const factories = zosConfig.proxies[`${ENABLE_CREDIT_PACKAGE}/CrowdloanFactory`];
                if (factories && factories.length) {
                    return await instantiateContract(CrowdloanFactory.abi,  factories[factories.length - 1].address);
                } else {
                    throw new Error ('CrowdloanFactory not deployed to network');
                }
            } 
        }

    } catch (e) {console.error(e)}
}

// async function 


export {
    //Contracts
    Crowdloan,
    CrowdloanFactory,
    ERC20,
    ERC20Detailed,
    ICrowdloan,
    IERC20,
    IRepaymentManager,
    ITermsContract,
    RepaymentManager,
    TermsContract,
    TermsContractLib,
    //Functions
    instantiateContract,
    getCrowdloanFactory
}