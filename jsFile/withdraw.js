document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //====

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //============
  const balanceTotalElement = document.getElementById("balence-total");
  const previousBalanceString = balanceTotalElement.innerText;
  const previousBalance = parseFloat(previousBalanceString);
  withdrawField.value = "";
  const currentBalance = previousBalance - newWithdrawAmount;

  if (newWithdrawAmount > previousBalance) {
    alert("fokinni tor balance e eto taka nai");
    return;
  }
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  balanceTotalElement.innerText = currentBalance;
});
