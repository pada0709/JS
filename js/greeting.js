const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //2. 새로고침 디폴트 막기
  loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 창에 .hidden 추가
  const username = loginInput.value; //username 변수에 input 값 저장
  localStorage.setItem(USERNAME_KEY, username); //username 변수를 USERNAME_KEY 이름으로 localStorage에 저장
  paintGreetings(username); //paintGreetings 함수 호출
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; //3. input값인 매개변수 username를 h1 태그에 입력
  greeting.classList.remove(HIDDEN_CLASSNAME); //.hidden 삭제로 h1 내용 출력
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //이미 저장된 데이터 속 USERNAME_KEY 호출
console.log(savedUsername);

if (savedUsername === null) {
  //저장된 USERNAME_KEY 값이 없는 경우
  loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인 창 다시 생성
  loginForm.addEventListener("submit", onLoginSubmit); //username 저장 함수 onLoginSubmit 호출
} else {
  paintGreetings(savedUsername);
}
