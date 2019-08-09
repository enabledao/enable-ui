import { contractMethodCall, contractMethodTransaction } from './web3Utils';

const getBorrower = instance =>  contractMethodCall(instance, 'getBorrower');
const getCrowdfundParams = instance =>  contractMethodCall(instance, 'getCrowdfundParams');
const getCrowdfundEnd = instance =>  contractMethodCall(instance, 'getCrowdfundEnd');
const getTotalCrowdfunded = instance =>  contractMethodCall(instance, 'getTotalCrowdfunded');
const startCrowdfund = instance =>  contractMethodTransaction(instance, 'startCrowdfund');
const fund = (instance, amount, txOptions) => contractMethodTransaction(instance, 'fund', amount, txOptions);
const refund = (instance, amount, txOptions) =>  contractMethodTransaction(instance, 'refund', amount, txOptions);
const withdraw = (instance, txOptions) =>  contractMethodTransaction(instance, 'withdraw()', txOptions);
const withdrawAmount = (instance, amount, txOptions) =>  contractMethodTransaction(instance, 'withdraw(uint256)', amount, txOptions);

export {
    //Contract Calls
    getBorrower,
    getCrowdfundEnd,
    getCrowdfundParams,
    getTotalCrowdfunded,
    //Contract transactions
    fund,
    refund,
    startCrowdfund,
    withdraw,
    withdrawAmount,
}