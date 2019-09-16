import { contractGetEvents, contractGetPastEvents } from "./web3Utils";

const LoanCreatedEvent = (instance, eventOptions, watch) => {
  if (watch) {
    return contractGetEvents(instance, "LoanCreated", eventOptions);
  } else {
    return contractGetPastEvents(instance, "LoanCreated", eventOptions);
  }
};

export { LoanCreatedEvent };
