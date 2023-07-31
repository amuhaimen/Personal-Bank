document.getElementById("btn-deposite").addEventListener("click", function () {
  const depositeField = document.getElementById("deposite-field");
  const newDepositeAmountString = depositeField.value;
  const newDepositeAmount = parseFloat(newDepositeAmountString);
  //====
  const depositeTotalElement = document.getElementById("deposite-total");
  const previousDepositeTotalString = depositeTotalElement.innerText;
  const previousDepositeTotal = parseFloat(previousDepositeTotalString);
  const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
  depositeTotalElement.innerText = currentDepositeTotal;
  //============

  const balanceTotalElement = document.getElementById("balence-total");
  const previousBalanceString = balanceTotalElement.innerText;
  const previousBalance = parseFloat(previousBalanceString);
  const currentBalance = previousBalance + newDepositeAmount;
  balanceTotalElement.innerText = currentBalance;

  depositeField.value = "";
});
