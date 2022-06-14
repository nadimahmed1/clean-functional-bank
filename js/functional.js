function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputTextValue = parseFloat(inputText);
    inputField.value = '';
    return inputTextValue;

}

function updateTotal(fieldId, amount) {
    const totalTag = document.getElementById(fieldId);
    const totalTagInText = totalTag.innerText;
    const previousTotal = parseFloat(totalTagInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldTagInText = fieldTag.innerText;
    const fieldTagInTextValue = parseFloat(fieldTagInText);
    return fieldTagInTextValue;
}

function updateBalance(amount, isAdding) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    let newBalance;

    if (isAdding == true) {
        newBalance = previousBalanceTotal + amount;
    }
    else {
        newBalance = previousBalanceTotal - amount;
    }

    balanceTotal.innerText = newBalance;

}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }

})
// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})