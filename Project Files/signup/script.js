const signupForm = document.getElementById("signupForm");
const signupStatus = document.getElementById("signupStatus");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    signupStatus.textContent = "Sign Up successful!";
    signupStatus.textContent1 = "Please wait while we redirect you to our home page!";
    signupStatus.style.color = "green";
    setTimeout(function() {
        window.location.href = "http://127.0.0.1:5500/index.html"; 
        }, 2000);
});
