const simulateTotalInterest = (contribution, interestRate, loanPeriod) => {
    return Math.floor(+contribution * (+interestRate || 0) * (+loanPeriod||0) /( 12 * 100)) || 0
}

export {
    simulateTotalInterest
}