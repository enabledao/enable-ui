import { contractMethodCall, contractMethodTransaction } from './web3Utils';

const allowance = (instance) =>  contractMethodCall(instance, 'allowance');
const request = (instance, address, txOptions) => contractMethodTransaction(instance, 'request', address, txOptions);


export {
    //Basic functions
    allowance,
    //Transactions
    request
}