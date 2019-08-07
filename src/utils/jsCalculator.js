const simulateTotalInterest = (contribution, interestRate, loanPeriod) => {
    return Math.floor(Number(contribution)*Number(interestRate || 0) * Number(loanPeriod||0) /( 12 * 100)) || 0
}

export {
    simulateTotalInterest
}