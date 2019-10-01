import {
  contractGetEvents,
  contractGetPastEvents,
  contractMethodCall,
  contractMethodTransaction
} from "./web3Utils";
import { approve } from "./paymentToken";

// Read functions

// Loan Terms
const getBorrower = instance => contractMethodCall(instance, "borrower");
const getLoanMetadataUrl = instance =>
  contractMethodCall(instance, "loanMetadataUrl");
const getPrincipalToken = instance => contractMethodCall(instance, "token");
const getPrincipalRequested = instance =>
  contractMethodCall(instance, "principalRequested");
const getRepaymentCap = instance => contractMethodCall(instance, "repaymentCap");

// Crowdfund Terms
const getCrowdfundStart = instance =>
  contractMethodCall(instance, "crowdfundStart");
const getCrowdfundDuration = instance =>
  contractMethodCall(instance, "crowdfundDuration");
const getCrowdfundEnd = instance =>
  contractMethodCall(instance, "crowdfundEnd");

// Contributions
const amountContributed = (instance, account) =>
  contractMethodCall(instance, "amountContributed", account);
const totalContributed = instance =>
  contractMethodCall(instance, "totalContributed");
const principalWithdrawn = instance =>
  contractMethodCall(instance, "principalWithdrawn");

// Repayments
const repaymentWithdrawn = (instance, account) =>
  contractMethodCall(instance, "repaymentWithdrawn", account);
const amountRepaid = instance => contractMethodCall(instance, "amountRepaid");
const totalRepaymentWithdrawn = instance => contractMethodCall(instance, "totalRepaymentWithdrawn");

// Transactions
const startCrowdfund = instance =>
  contractMethodTransaction(instance, "startCrowdfund");
const fund = (instance, amount, txOptions) =>
  contractMethodTransaction(instance, "fund", amount, txOptions);
const withdrawPrincipal = (instance, amount, txOptions) =>
  contractMethodTransaction(instance, "withdrawPrincipal", amount, txOptions);
const repay = (instance, amount, txOptions) =>
  contractMethodTransaction(instance, "repay", amount, txOptions);
const withdrawRepayment = (instance, txOptions) =>
  contractMethodTransaction(instance, "withdrawRepayment", txOptions);

const approveAndFund = async (
  paymentTokenInstance,
  instance,
  amount,
  txOptions
) => {
  await approve(
    paymentTokenInstance,
    instance.options.address,
    amount,
    txOptions
  );
  return fund(instance, amount, txOptions);
};

const approveAndPay = async (
  paymentTokenInstance,
  instance,
  amount,
  txOptions
) => {
  await approve(
    paymentTokenInstance,
    instance.options.address,
    amount,
    txOptions
  );
  return repay(instance, amount, txOptions);
};

/* 
    Events
*/
const FundEvent = (instance, eventOptions, watch) => {
  if (watch) {
    return contractGetEvents(instance, "Fund", eventOptions);
  } else {
    return contractGetPastEvents(instance, "Fund", eventOptions);
  }
};
const WithdrawPrincipalEvent = (instance, eventOptions, watch) => {
  if (watch) {
    return contractGetEvents(instance, "WithdrawPrincipal", eventOptions);
  } else {
    return contractGetPastEvents(instance, "WithdrawPrincipal", eventOptions);
  }
};
const WithdrawRepaymentEvent = (instance, eventOptions, watch) => {
  if (watch) {
    return contractGetEvents(instance, "WithdrawRepayment", eventOptions);
  } else {
    return contractGetPastEvents(instance, "WithdrawRepayment", eventOptions);
  }
};
const RepayEvent = (instance, eventOptions, watch) => {
  if (watch) {
    return contractGetEvents(instance, "Repay", eventOptions);
  } else {
    return contractGetPastEvents(instance, "Repay", eventOptions);
  }
};
const StartCrowdfundEvent = (instance, eventOptions, watch) => {
  if (watch) {
    return contractGetEvents(instance, "StartCrowdfund", eventOptions);
  } else {
    return contractGetPastEvents(instance, "StartCrowdfund", eventOptions);
  }
};

export {
  //Loan Terms
  getBorrower,
  getLoanMetadataUrl,
  getPrincipalToken,
  getPrincipalRequested,
  getRepaymentCap,
  //Crowdfund Terms
  getCrowdfundEnd,
  getCrowdfundStart,
  getCrowdfundDuration,
  //Contributions
  amountContributed,
  totalContributed,
  principalWithdrawn,
  //Repayments
  amountRepaid,
  repaymentWithdrawn,
  totalRepaymentWithdrawn,
  //Contract transactions
  startCrowdfund,
  fund,
  withdrawPrincipal,
  repay,
  withdrawRepayment,
  // Derived function
  approveAndFund,
  approveAndPay,
  //Events
  FundEvent,
  WithdrawPrincipalEvent,
  WithdrawRepaymentEvent,
  RepayEvent,
  StartCrowdfundEvent
};
