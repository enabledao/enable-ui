import { contractMethodCall, contractMethodTransaction } from './web3Utils';

const getBorrower = instance =>  contractMethodCall(instance, 'getBorrower');
const getCrowdfundParams = instance =>  contractMethodCall(instance, 'getCrowdfundParams');
const getCrowdfundEnd = instance =>  contractMethodCall(instance, 'getCrowdfundEnd');
const getTotalCrowdfunded = instance =>  contractMethodCall(instance, 'getTotalCrowdfunded');
const startCrowdfund = instance =>  contractMethodTransaction(instance, 'startCrowdfund');
const fund = (instance, amount) =>  contractMethodTransaction(instance, 'fund', amount);
const refund = (instance, amount) =>  contractMethodTransaction(instance, 'refund', amount);
const withdraw = instance =>  contractMethodTransaction(instance, 'withdraw()');
const withdrawAmount = (instance, amount) =>  contractMethodTransaction(instance, 'withdraw(uint256)', amount);

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