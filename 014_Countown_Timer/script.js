let startingMinutes = 10;
let time = startingMinutes * 60;
let pause = false;

const countdownEl = document.getElementById("countdown");
const buttonEl = document.getElementById("timer-btn");

function setTime() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
}
setTime();

buttonEl.addEventListener("click", startCountdown);

function startCountdown() {
  pause = !pause;

  if (pause) {
    buttonEl.innerHTML = "PAUSE";
    setInterval(updateCountdown, 1000);
  } else {
    buttonEl.innerHTML = "START";
  }
}

function updateCountdown() {
  //   let time = countdownEl.innerHTML;
  //   minutes = time.length === 4 ? 10 : time[0];
  //   let seconds = time[2] + time[3];
  //   console.log("minutes", minutes);
  //   console.log("seconds", seconds);

  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}
