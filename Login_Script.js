// Handle Signup Form Validation & Redirection
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var termsCheck = document.getElementById("termsCheck");
    var errorElement = document.getElementById("signup_error");

    errorElement.innerText = "";

    if (!termsCheck.checked) {
        errorElement.innerText = "You must agree to the terms & conditions.";
        return;
    }

    if (password.trim() === "" || confirmPassword.trim() === "") {
        errorElement.innerText = "Password fields cannot be empty.";
        return;
    }

    if (password !== confirmPassword) {
        errorElement.innerText = "Passwords do not match.";
        return;
    }

    window.location.href = "Home.html";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "Home.html"; 
});