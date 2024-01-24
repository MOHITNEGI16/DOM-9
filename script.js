
// fetching Elements
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");


const hours = document.getElementById("hrs");
const minutes = document.getElementById("min");
const second = document.getElementById("sec");
const miliSec = document.getElementById("miliSec");

// Things we used
let currentTime = new Date();
var miliSeconds = 0;
let arr = [];
let timer;
let flag = true;


// Buttons Wroking

startButton.addEventListener("click", () => {

  if (flag) {
    timer = setInterval(() => {
      miliSeconds = miliSeconds + 10;
      updatingUI();
    }, 10);
  }
  flag = false;


});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
  flag = true;
});

resetButton.addEventListener("click", () => {
  flag = true;
  miliSeconds = 0;
  arr = [];
  clearInterval(timer);
  updatingUI();
  updatingLaps();
});

lapButton.addEventListener("click", () => {
  if (miliSeconds > 0) {
    arr.push(miliSeconds);
  }

  updatingLaps();
});


// function used for better working

function updatingLaps() {

  const ulist = document.getElementById("lapsContainer");
  ulist.innerHTML = "";

  arr.forEach((time, index) => {
    const li = document.createElement("li");
    let getTime = lapTime(time);
    li.innerHTML = `
    <span class="count">${index + 1}</span>
    <span class="laps">${getTime}</span>
    `;

    ulist.append(li);
  });


}


function lapTime(time) {
  let msTime = time % 1000;
  let sTime = Math.floor(time / 1000) % 60;
  let mTime = Math.floor(time / (1000 * 60)) % 60;
  let hTime = Math.floor(time / (1000 * 60 * 60));


  msTime = msTime < 10 ? `0${msTime}` : msTime;
  sTime = sTime < 10 ? `0${sTime}` : sTime;
  mTime = mTime < 10 ? `0${mTime}` : mTime;
  hTime = hTime < 10 ? `0${hTime}` : hTime;

  return `${hTime}:${mTime}:${sTime}.${msTime}`;

}


function updatingUI() {

  let ms = miliSeconds % 1000;
  let s = Math.floor(miliSeconds / 1000) % 60;
  let m = Math.floor(miliSeconds / (1000 * 60)) % 60;
  let h = Math.floor(miliSeconds / (1000 * 60 * 60));


  ms = ms < 10 ? `0${ms}` : ms;
  s = s < 10 ? `0${s}` : s;
  m = m < 10 ? `0${m}` : m;
  h = h < 10 ? `0${h}` : h;

 
  miliSec.innerText = ms;
  second.innerText = s;
  minutes.innerText = m;
  hours.innerText = h;
}
