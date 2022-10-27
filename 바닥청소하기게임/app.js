const target = document.querySelector(".target");
const body = document.querySelector("body");
let posx = 0;
let posy = 0;

// 사용자가 누르는 키의 상태를 저장하는 객체
let keys = {};
// ArrowLefr: true;

function move(event) {
  keys[event.key] = true;
  // xy[event.rect];
  console.log(keys);
  console.log(event);
}

function stop(event) {
  keys[event.key] = false;
  console.log(keys);
}
function cleanX(event) {
  //   console.log(`현재 창기준 x좌표 : ${rect.x}px y좌표 : ${rect.y}px`);
  let rect = target.getBoundingClientRect();
  const clean = document.querySelector(".clean");
  console.log(rect);
  clean.style.transform = `translate(0px,${posy}px)`;

  clean.style.width = `calc(90px + ${rect.x}px)`;
  clean.style.height = `calc(80px)`;
}
function cleanY(event) {
  //   console.log(`현재 창기준 x좌표 : ${rect.x}px y좌표 : ${rect.y}px`);
  let rect = target.getBoundingClientRect();
  const clean = document.querySelector(".clean");
  const height = window.innerHeight;
  console.log(rect);
  clean.style.transform = `translate(${posx}px,0px)`;
  clean.style.width = `calc(90px)`;
  clean.style.height = `calc(90px + ${rect.y}px)`;
}

document.addEventListener("keydown", move);
document.addEventListener("keyup", stop);
document.addEventListener("keydown", cleanX);
document.addEventListener("keydown", cleanY);

function play() {
  if (keys.ArrowRight) {
    posx += 5;
    target.style.transform = `translate(${posx}px,${posy}px)`;
    cleanX();
  }
  if (keys.ArrowLeft) {
    posx -= 5;
    target.style.transform = `translate(${posx}px,${posy}px)`;
    cleanX();
  }
  if (posx <= 0) {
    posx = 0;
  }

  if (posx >= window.innerWidth - 100) {
    posx = window.innerWidth - 100;
  }

  if (keys.ArrowUp) {
    posy -= 5;
    target.style.transform = `translate(${posx}px,${posy}px)`;
    cleanY();
  }
  if (keys.ArrowDown) {
    posy += 5;
    target.style.transform = `translate(${posx}px,${posy}px)`;
    cleanY();
  }
  if (posy <= 0) {
    posy = 0;
  }

  if (posy >= window.innerHeight - 100) {
    posy = window.innerHeight - 100;
  }
  console.log("play!");
  window.requestAnimationFrame(play);
}

window.requestAnimationFrame(play);
