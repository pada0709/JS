const toDoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos = [];
let toDos = []; //배열에 데이터가 추가변경 가능해야함(새로고침하면 데이터가 초기화되는 문제 해결)

//localStorage에는 배열 저장 불가(텍스트만 가능)
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //배열을 String으로 변환
  console.log(toDos);
}

function deleteToDo(event) {
  const li = event.target.parentElement; //클릭에 대한 정보값을 받아 그 부모요소를 저장
  li.remove(); //부모 태그(li) 제거
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id)); //배열의 id와 리스트의 id가 다른 것만 남김(삭제한 같은 id는 제외)
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //3. li태그 생성
  li.id = newTodo.id;
  const span = document.createElement("span"); //span태그 생성
  span.innerText = newTodo.text; //span 태그에 입력값 추가
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; //삭제하기 위해선 text의 위치값을 알아야하기 때문에 id 할당
  toDos.push(newTodoObj); //입력값 배열에 넣기
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); //1. 제출 시

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //단순 문자열인 배열을 사용 가능한 배열로 변환
  //parsedToDos.forEach((item) => console.log(item)); => 배열 각각의 아이템에 대해 한번씩 실행
  toDos = parsedToDos; //새로고침하면 빈 배열에 데이터를 저장하기 때문에 기존 localStorage에 저장되어 있는 데이터값을 배열에 저장
  parsedToDos.forEach(paintToDo); //parsedToDos 배열 각각의 아이템을 매개변수로 paintToDo 함수 호출
}
