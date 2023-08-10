const loginForm = document.getElementById("loginForm");
const loginStatus = document.getElementById("loginStatus");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
        loginStatus.textContent = "Login successful!";
        loginStatus.style.color = "green";
        setTimeout(function() {
        window.location.href = "http://127.0.0.1:5500/index.html"; 
        }, 100);
    } else {
        loginStatus.textContent = "Invalid username or password. Please try again.";
        loginStatus.style.color = "red";
    }
});
