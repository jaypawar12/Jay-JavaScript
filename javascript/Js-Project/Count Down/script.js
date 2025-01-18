const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const countdownText = document.getElementById("countdown-text");

let interval;

function startCountdown() {
  let inputDate = document.getElementById("countdownInput").value;
  if (!inputDate) {
    return alert("Please Select a Date and Time...");
  }
  setCountdownText("Time remaining until the event...", "#007bff", '20px');
  clearInterval(interval);
  let targetDate = new Date(inputDate).getTime();
  interval = setInterval(() => updateCountdown(targetDate), 1000);
}

function updateCountdown(targetDate) {
  let timeLeft = targetDate - Date.now();
  if (timeLeft <= 0) {
    clearInterval(interval);
    setCountdownText("The Event is Live!", "green", "24px");
    return;
  }

  let days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
  let hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

  day.innerHTML = (days < 10 ? '0' : '') + days;
  hour.innerHTML = (hours < 10 ? '0' : '') + hours;
  minute.innerHTML = (minutes < 10 ? '0' : '') + minutes;
  second.innerHTML = (seconds < 10 ? '0' : '') + seconds;
}

function setCountdownText(text, color, fontSize) {
  countdownText.innerHTML = text;
  countdownText.style.color = color;
  countdownText.style.fontSize = fontSize;
}

document.getElementById("startButton").addEventListener("click", startCountdown);