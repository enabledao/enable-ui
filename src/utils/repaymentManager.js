import { contractGetEvents, contractGetPastEvents, contractMethodCall, contractMethodTransaction } from './web3Utils';
import { approve } from './paymentToken';

const released = (instance, account) =>  contractMethodCall(instance, 'released', account);
const releaseAllowance = (instance, account) =>  contractMethodCall(instance, 'releaseAllowance', account);
const shares = (instance, account) =>  contractMethodCall(instance, 'shares', account);
const totalPaid = instance =>  contractMethodCall(instance, 'totalPaid');
const totalShares = instance =>  contractMethodCall(instance, 'totalShares');

const pay = (instance, amount, txOptions) => contractMethodTransaction(instance, 'pay', amount, txOptions);
const release = (instance, account, txOptions) =>  contractMethodTransaction(instance, 'release', account, txOptions);

const approveAndPay = async (paymentTokenInstance, instance, amount, txOptions) => {
    await approve(paymentTokenInstance, instance.options.address, amount, txOptions);
    return pay(instance, amount, txOptions);
}

const PaymentReceivedEvent = (instance, eventOptions, watch) => {
    if (watch) {
        return contractGetEvents(instance, "PaymentReceived", eventOptions)
    } else {
        return contractGetPastEvents(instance, "PaymentReceived", eventOptions);
    }
}
const PaymentReleasedEvent = (instance, eventOptions, watch) => {
    if (watch) {
        return contractGetEvents(instance, "PaymentReleased", eventOptions)
    } else {
        return contractGetPastEvents(instance, "PaymentReleased", eventOptions);
    }
}
const ShareDecreasedEvent = (instance, eventOptions, watch) => {
    if (watch) {
        return contractGetEvents(instance, "ShareDecreased", eventOptions)
    } else {
        return contractGetPastEvents(instance, "ShareDecreased", eventOptions);
    }
}
const ShareIncreasedEvent = (instance, eventOptions, watch) => {
    if (watch) {
        return contractGetEvents(instance, "ShareIncreased", eventOptions)
    } else {
        return contractGetPastEvents(instance, "ShareIncreased", eventOptions);
    }
}

export {
    released,
    releaseAllowance,
    shares,
    totalPaid,
    totalShares,
    //Contract transactions
    pay,
    release,
    approveAndPay,

    //Events
    PaymentReceivedEvent,
    PaymentReleasedEvent,
    ShareDecreasedEvent,
    ShareIncreasedEvent
}