const target = document.querySelector(".target");
const body = document.querySelector("body");
let pos = 0;

// 사용자가 누르는 키의 상태를 저장하는 객체
let keys = {};
// ArrowLefr: true;

function move(event) {
  keys[event.key] = true;
  console.log(keys);
}

function stop(event) {
  keys[event.key] = false;
  console.log(keys);
}
function clean(event) {
  let rect = target.getBoundingClientRect();
  const clean = document.querySelector(".clean");

  //   console.log(`현재 창기준 x좌표 : ${rect.x}px y좌표 : ${rect.y}px`);
  //   const x = rect.x;
  console.log(rect);
  //   clean.style.left = `${rect.x}px`;
  clean.style.width = `calc(80px + ${rect.x}px)`;
  //   clean.style.backgroundColor = "red";
}
document.addEventListener("keydown", move);
document.addEventListener("keyup", stop);
document.addEventListener("keydown", clean);

function play() {
  clean();

  if (keys.ArrowRight) {
    pos += 5;
    target.style.transform = `translateX(${pos}px)`;
  }
  if (keys.ArrowLeft) {
    pos -= 5;
    target.style.transform = `translateX(${pos}px)`;
  }
  if (keys.ArrowUp) {
    pos -= 5;
    target.style.transform = `translateY(${pos}px)`;
  }
  if (keys.ArrowDown) {
    pos += 5;
    target.style.transform = `translateY(${pos}px)`;
  }
  console.log("play!");
  window.requestAnimationFrame(play);
}

window.requestAnimationFrame(play);
