const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Reset error messages
    loginErrorMsg.style.opacity = 0;

    if (username === "user1" && password === "admin") {
        window.location.href = "frame.html"; // Navigate to frame.html
    } else {
            if (username !== "user1") {
                loginErrorMsg.style.opacity = 1;
            }
            if (password !== "admin") {
                loginErrorMsg.style.opacity = 1;
            }
        }
    
});
