const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const li = document.createElement("li"); // li 태그 생성
    const span = document.createElement("span"); // span 태그 생성
    li.appendChild(span); // li 태그 내부에 span 넣음
    span.innerText = newTodo; // 인자로 받아온 newTodo value를 span 내부에 추가
    toDoList.appendChild(li); // todo list에 li 추가
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";
    paintToDo(newTodo); // paintToDo 함수에 value 전달
}

toDoForm.addEventListener("submit", handleToDoSubmit);