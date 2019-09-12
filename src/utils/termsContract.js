import { contractMethodCall } from './web3Utils';

const getInterestRate = instance => contractMethodCall(instance, 'getInterestRate');
const getLoanParams = instance => contractMethodCall(instance, 'getLoanParams');
const getLoanEndTimestamp = instance =>  contractMethodCall(instance, 'getLoanEndTimestamp');
const getLoanStatus = instance =>  contractMethodCall(instance, 'getLoanStatus');
const getLoanStartTimestamp = instance =>  contractMethodCall(instance, 'getLoanStartTimestamp');
const getMaximumRepayment = instance =>  contractMethodCall(instance, 'getMaximumRepayment');
const getMinimumRepayment = instance =>  contractMethodCall(instance, 'getMinimumRepayment');
const getNumScheduledPayments = instance =>  contractMethodCall(instance, 'getNumScheduledPayments');
const getPrincipalDisbursed = instance =>  contractMethodCall(instance, 'getPrincipalDisbursed');
const getPrincipalToken = instance =>  contractMethodCall(instance, 'getPrincipalToken');
const getPrincipalRequested = instance =>  contractMethodCall(instance, 'getPrincipalRequested');
const getScheduledPayment = (instance, period) =>  contractMethodCall(instance, 'getScheduledPayment', period);
const getRequestedScheduledPayment = (instance, period) =>  contractMethodCall(instance, 'getRequestedScheduledPayment', period);





export {
    getInterestRate,
    getLoanParams,
    getLoanEndTimestamp,
    getLoanStatus,
    getLoanStartTimestamp,
    getMaximumRepayment,
    getMinimumRepayment,
    getNumScheduledPayments,
    getPrincipalDisbursed,
    getPrincipalToken,
    getPrincipalRequested,
    getRequestedScheduledPayment,
    getScheduledPayment
}