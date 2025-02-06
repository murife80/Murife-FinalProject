function calculateRepayment() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12; // Convert years to months

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    const monthlyInterestRate = interestRate / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
     // the calculator is on reducing balance
    document.getElementById('result').innerText = The total repayment amount: $${monthlyPayment.toFixed(2)};
}
