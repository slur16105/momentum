const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string 오타시 자바스크립트에선 알 수 없지만 변수로 변경하여 사용시 오타일 경우 알려줌
// 반복되는 string은 대문자 변수로 저장하면 좋다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// localStorage에 유저정보가 있는지 먼저 확인
// 정보가 없다면 form을 보여주고 있다면 hidden처리

function onLoginSubmit(event) {
    event.preventDefault(); // sumit의 새로고침되는 기본 기능을 막기 위해 사용
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// username을 인자로 받는 함수 - 호출하는 위치에 따라 유저정보를 다른 곳에서 받음
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(saveUsername);
}