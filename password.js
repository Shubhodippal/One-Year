// Check if the wrong password attempts count is already stored in localStorage
var wrongAttempts = localStorage.getItem("wrong_password_attempts");

// If there's no stored count, initialize it to 0
if (!wrongAttempts) {
    localStorage.setItem("wrong_password_attempts", 0);
}else {
    // Reset count to 0 if the page is refreshed or closed
    window.addEventListener('beforeunload', function() {
        localStorage.setItem("wrong_password_attempts", 0);
    });
}

document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var enteredPassword = document.getElementById("password-input").value;
    var correctPassword = "meow"; // Replace with your actual password
    var storedAttempts = localStorage.getItem("wrong_password_attempts");
    var attempts = parseInt(storedAttempts);

    if (enteredPassword === correctPassword) {
        localStorage.setItem("wrong_password_attempts", 0);
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        attempts++;
        localStorage.setItem("wrong_password_attempts", attempts);
        if (attempts==1) {
            alert("Jaa tumi dhorte parle nh abr bhebe try koro");
        }else if(attempts >= 2){
            alert("Jaa ebaro holo nh bhalo kre bhabo")
        } else {
            alert("You have exceeded the maximum number of attempts. Please try again later.");
        }
    }
});
