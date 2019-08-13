import { contractGetEvents, contractGetPastEvents, contractMethodCall } from './web3Utils';

const released = (instance, account) =>  contractMethodCall(instance, 'released', account);
const releaseAllowance = (instance, account) =>  contractMethodCall(instance, 'releaseAllowance', account);
const shares = (instance, account) =>  contractMethodCall(instance, 'shares', account);
const totalPaid = instance =>  contractMethodCall(instance, 'totalPaid');
const totalShares = instance =>  contractMethodCall(instance, 'totalShares');

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

    //Events
    PaymentReceivedEvent,
    PaymentReleasedEvent,
    ShareDecreasedEvent,
    ShareIncreasedEvent
}