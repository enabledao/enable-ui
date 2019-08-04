import { contractMethodCall, prepNumber } from './web3Utils';

const getLoanParams = instance => contractMethodCall(instance, 'getLoanParams');
const getLoanEndTimestamp = instance =>  contractMethodCall(instance, 'getLoanEndTimestamp');
const getScheduledPayment = (instance, period) =>  contractMethodCall(instance, 'getScheduledPayment', period);
const getRequestedScheduledPayment = (instance, period) =>  contractMethodCall(instance, 'getRequestedScheduledPayment', period);


export {
    getLoanParams,
    getLoanEndTimestamp,
    getRequestedScheduledPayment,
    getScheduledPayment
}