const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; //이미지 랜덤

const bgImage = document.createElement("img"); //img 태그 생성
bgImage.src = `img/${chosenImage}`; //img에 src 속성 추가

document.body.appendChild(bgImage); //body에 자식 태그로 bgImage 추가
