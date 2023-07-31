document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //====

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  //============
  const balanceTotalElement = document.getElementById("balence-total");
  const previousBalanceString = balanceTotalElement.innerText;
  const previousBalance = parseFloat(previousBalanceString);
  const currentBalance = previousBalance - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalance;
  withdrawField.value = "";
});
