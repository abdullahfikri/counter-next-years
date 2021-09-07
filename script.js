const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const nextYears = `1 Jan ${new Date().getFullYear() + 1}`;
const countdown = () => {
  const newYearsDate = new Date(nextYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  daysEl.innerHTML = String(days).padStart(2, 0);
  hoursEl.innerHTML = String(hours).padStart(2, 0);
  minutesEl.innerHTML = String(minutes).padStart(2, 0);
  secondsEl.innerHTML = String(seconds).padStart(2, 0);
};
// initial
countdown();

setInterval(countdown, 1000);
