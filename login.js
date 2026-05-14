function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "admin" && password === "1234") {
        message.style.color = "lightgreen";
        message.innerText = "Login successful ✔️";
    } else {
        message.style.color = "red";
        message.innerText = "Wrong username or password ❌";
    }
}