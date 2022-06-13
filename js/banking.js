// get deposit button event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputField = document.getElementById('deposit-input');
    const depositInputText = depositInputField.value;
    const newDepositAmount = parseFloat(depositInputText);
    // set the deposit field
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update balence
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotalAmount + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;
    // clear deposit input field
    depositInputField.value = '';


})
// set withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawTotalText = withdrawInputField.value;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);
    // 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + previousWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear withdraw inpiut field
    withdrawInputField.value = '';
    // set withdraw - balance update

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;
}) 