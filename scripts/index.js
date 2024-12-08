const studentCredentials = {
    username: "student",
    password: "password"
}

const staffCredentials = {
    username: "staff",
    password: "password"
}

const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === studentCredentials.username && password === studentCredentials.password) {
        window.location.href = "StudentHome.html";
    }
    else if (username === staffCredentials.username && password === staffCredentials.password){
        window.location.href = "StaffHome.html";
    }
    else {
        errorMessage.textContent = "Incorrect username or password.";
        usernameInput.classList.add("input-error");
        passwordInput.classList.add("input-error");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});


