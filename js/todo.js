const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify으로 string 으로 변경
}

function deleteToDo(event) { // 인자에 event로 click 정보를 볼 수 있다.
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); // li 태그 생성
    li.id = newTodo.id;
    const span = document.createElement("span"); // span 태그 생성
    span.innerText = newTodo.text; // 인자로 받아온 newTodo value를 span 내부에 추가
    const button = document.createElement("button"); // button 태그 생성
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li 태그 내부에 span 넣음
    li.appendChild(button); // li 태그 내부에 button 넣음
    toDoList.appendChild(li); // todo list에 li 추가
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
    toDoInput.value = "";
    const newTodoObj = { // object 로 저장
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); 
    paintToDo(newTodoObj); // paintToDo 함수에 value 전달 화면에 표시
    saveToDos(); // toDos array를 localStorage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse은 string을 array로 만듬
    toDos = parsedToDos; // toDos array에 localStorage에 저장된 내용 전달
    parsedToDos.forEach(paintToDo);
}