const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // sumit의 새로고침되는 기본 기능을 막기 위해 사용
    console.log(loginButton.value);
}

// a링크의 기본 이벤트 로그로 확인
// preventDefault를 이해하기
function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);