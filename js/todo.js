const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //배열을 String으로 변환
  console.log(toDos);
}

function deleteToDo(event) {
  const li = event.target.parentElement; //클릭에 대한 정보값을 받아 그 부모요소를 저장
  li.remove(); //부모 태그(li) 제거
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //3. li태그 생성
  const span = document.createElement("span"); //span태그 생성
  span.innerText = newTodo; //span 태그에 입력값 추가
  const button = document.createElement("button"); //button태그 생성
  button.innerText = "X"; //X표시 버튼
  button.addEventListener("click", deleteToDo); //버튼 클릭 시
  li.appendChild(span); //li 태그 자식으로 span 태그 추가
  li.appendChild(button);
  toDoList.appendChild(li); //ul 태그에 li 태그 자식으로 추가
}

function handleToDoSubmit(event) {
  event.preventDefault(); //2. 새로고침 방지
  const newTodo = todoInput.value; //입력값 변수 저장
  todoInput.value = ""; //입력칸 비우기
  toDos.push(newTodo); //입력값 배열에 넣기
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //1. 제출 시

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log(item));
}
