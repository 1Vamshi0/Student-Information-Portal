const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Reset error messages
    loginErrorMsg.style.opacity = 0;

    if (username === "vamshi" && password === "Infinity_717") {
        window.location.href = "frame.html"; // Navigate to frame.html
    } else {
            if (username !== "vamshi") {
                loginErrorMsg.style.opacity = 1;
            }
            if (password !== "Infinity_717") {
                loginErrorMsg.style.opacity = 1;
            }
        }
    
});
