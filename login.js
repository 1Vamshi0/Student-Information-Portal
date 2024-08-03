const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Reset error messages
    loginErrorMsg.style.opacity = 0;

    if (username === "username" && password === "password") {
        window.location.href = "frame.html"; // Navigate to frame.html
    } else {
            if (username !== "username") {
                loginErrorMsg.style.opacity = 1;
            }
            if (password !== "password") {
                loginErrorMsg.style.opacity = 1;
            }
        }
    
});
