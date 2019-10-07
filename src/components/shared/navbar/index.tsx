import Navbar from './component'
import { getNetworkId } from '../../../utils/web3Utils'

const GetNetworkId = async () => {
    const networkId = await getNetworkId()
    console.log(networkId)
}

export default Navbar
