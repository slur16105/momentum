const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginButton.value);
}

loginForm.addEventListener("submit", onLoginSubmit);