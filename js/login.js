document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-input');
    const userEmail = emailField.value;

    // get password field
    const passwordField = document.getElementById('password-input');
    const userPassword = passwordField.value;

    if (userEmail == 'nadim@bank.com' && userPassword == 'nadim') {
        window.location.href = 'banking.html';
    }
})