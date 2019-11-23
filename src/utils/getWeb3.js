import Web3 from 'web3'
import { INFURA_PROVIDER } from '../config/constants'
import { store } from '../store'
import { setNetworkId } from '../store/networkId'

/**
 * TODO(Dan): Should be injected server-side once we move to Next.js
 */
const infuraProjectId = '67f26d677db04c0eb9a51c2789fa37e7'

let web3
let gettingWeb3

const getBackupProvider = () => {
    return process.env.NODE_ENV === 'development' &&
        process.env.REACT_APP_LOCAL_NODE
        ? 'https://localhost:8545'
        : `${INFURA_PROVIDER}${infuraProjectId}`
}

const getWeb3 = () =>
    new Promise((resolve, reject) => {
        gettingWeb3 = true
        let _web3
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        window.addEventListener('load', async () => {
            // Modern dapp browsers...
            if (window.ethereum) {
                console.log('Injected ethereum provider detected.')
                _web3 = new Web3(window.ethereum)
            }
            // Legacy dapp browsers...
            else if (window.web3) {
                // Use Mist/MetaMask's provider.
                _web3 = new Web3(
                    window.web3.givenProvider || window.web3.currentProvider
                )
                console.log('Injected web3 detected.')
            }
            // Fallback to localhost; use dev console port by default...
            else {
                _web3 = new Web3(getBackupProvider())
                console.log(
                    'No web3 instance injected, using Infura/Local web3.'
                )
            }
            const networkId = await _web3.eth.net.getId()
            store.dispatch(setNetworkId(networkId))
            web3 = _web3
            gettingWeb3 = false
            resolve(web3)
        })
    })

const getGanacheWeb3 = () => {
    const isProd = process.env.NODE_ENV === 'production'
    if (isProd) {
        return null
    }
    const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const web3 = new Web3(provider)
    return web3
}

const connectToWallet = async () => {
    await resolveWeb3()
    try {
        if (!web3.eth.defaultAccount && window.ethereum) {
            // Request account access if needed
            await window.ethereum.enable()
            // Acccounts now exposed
        }
        web3.eth.defaultAccount = (await web3.eth.getAccounts())[0]
    } catch (error) {
        console.error(error)
        throw error
    }
}

const networksExplorer = {
    0: '127.0.0.1:7545',
    1: 'https://etherscan.io',
    42: 'https://kovan.etherscan.io',
}

const resolveWeb3 = async () => {
    if (!web3) {
        if (gettingWeb3) {
            return new Promise(resolve => {
                setTimeout(() => resolve(resolveWeb3()), 300)
            })
        }
        await getWeb3()
    }
    return web3
}

export default resolveWeb3
export { getGanacheWeb3, connectToWallet, networksExplorer }
