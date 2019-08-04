import { contractMethodCall, prepNumber } from './web3Utils';

const totalShares = instance =>  contractMethodCall(instance, 'totalShares');

export {
    totalShares
}