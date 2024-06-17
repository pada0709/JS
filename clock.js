const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //padStart()는 String만 => text 변환 후
  const minutes = String(date.getMinutes()).padStart(2, "0"); //2자리까지 표현하는데 남은 빈 자리의 앞을 0으로 채운다
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침하자마자 1초 동작
setInterval(getClock, 1000); //1초마다 getClock 함수 호출
