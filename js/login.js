// Validate sign in form
function validateEmail(email) {
    const re = /^[\w.+\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 8 && password.length <= 32;
}

function validateForm() {
    const form = document.querySelector(".login-form");
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    let errorMessage = "";

    if (!validateEmail(emailInput.value)) {
        errorMessage += "Invalid email format. Email must end with '@something.something'\n";
    }

    if (!validatePassword(passwordInput.value)) {
        errorMessage += "Password must be between 8 and 32 characters.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
        return false;
    }

    return true;
}

const signInForm = document.querySelector(".login-form");
signInForm.addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});
