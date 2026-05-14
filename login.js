function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let box = document.getElementById("box");

    if (username === "admin" && password === "1234") {
        message.style.color = "lightgreen";
        message.innerText = "Login successful ✔️";
    } else {
        message.style.color = "red";
        message.innerText = "Wrong username or password ❌";

        // shake effect
        box.classList.add("shake");
        setTimeout(() => box.classList.remove("shake"), 300);
    }
}

// show/hide password
function togglePassword() {
    let pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}