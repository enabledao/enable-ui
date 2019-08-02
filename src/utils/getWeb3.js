import Web3 from "web3";

const FALLBACK_WEB3_PROVIDER = "http://localhost:8545";

let web3;
let gettingWeb3;

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    gettingWeb3 = true;
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        console.log("Injected ethereum provider detected.");
        web3 = new Web3(window.ethereum);
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
        web3 = new Web3(window.web3.givenProvider || window.web3.currentProvider);
        console.log("Injected web3 detected.");
      }
      // Fallback to localhost; use dev console port by default...
      else {
        web3 = new Web3(FALLBACK_WEB3_PROVIDER);
        console.log("No web3 instance injected, using Infura/Local web3.");
      }
      web3.eth.defaultAccount = (await web3.eth.getAccounts())[0]
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
