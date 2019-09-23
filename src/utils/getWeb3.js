import Web3 from "web3";
import { INFURA_PROVIDER } from '../config/constants';

const infuraProjectId = process.env.REACT_APP_INFURA_PROJECT_ID;

let web3;
let gettingWeb3;

const getBackupProvider = () => {
  return process.env.NODE_ENV === 'development' && process.env.REACT_APP_LOCAL_NODE ?
    'https://localhost:8545' :
    `${INFURA_PROVIDER}${infuraProjectId}`;
}

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    gettingWeb3 = true;
    let _web3;
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        console.log("Injected ethereum provider detected.");
        _web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
        } catch (error) {
          gettingWeb3 = false;
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        _web3 = new Web3(window.web3.givenProvider || window.web3.currentProvider);
        console.log("Injected web3 detected.");
      }
      // Fallback to localhost; use dev console port by default...
      else {
        _web3 = new Web3(getBackupProvider());
        console.log("No web3 instance injected, using Infura/Local web3.");
      }
      _web3.eth.defaultAccount = (await _web3.eth.getAccounts())[0]
      web3 = _web3;
      gettingWeb3 = false;
      resolve(web3);
    });
  });

const getGanacheWeb3 = () => {
  const isProd = process.env.NODE_ENV === "production";
  if (isProd) {
    return null;
  }
  const provider = new Web3.providers.HttpProvider("http://localhost:8545");
  const web3 = new Web3(provider);
  return web3;
};

const resolveWeb3 = async () => {
  if (!web3) {
    if (gettingWeb3) {
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(resolveWeb3()),
          300
        );
      });
    }
      await getWeb3();
  }
  return web3;
}

export default resolveWeb3;
export { getGanacheWeb3 };
