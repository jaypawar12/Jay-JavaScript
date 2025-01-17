let day = document.getElementById("days");
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let countdownText = document.getElementById("countdown-text");

document.getElementById("startButton").addEventListener("click", () => {
  let inputDate = document.getElementById("countdownInput").value;

  if (!inputDate) {
    alert("Please Select a Date and Time...")
  }

  let targetDate = new Date(inputDate).getTime();

  let updateCountdown = () => {
    let now = new Date().getTime();
    let timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownText.innerHTML = "The Event is Live!"; 
      countdownText.style.color = "green"; 
      countdownText.style.fontSize = "24px";
      return;
    }

    let days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    let hours = Math.floor(timeLeft % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
    let minutes = Math.floor(timeLeft % (24 * 60 * 60 * 1000) / (60 * 1000));
    let seconds = Math.floor(timeLeft % (24 * 60 * 60 * 1000) / (1000));

    day.innerHTML = days < 10 ? '0' + days : days;
    hour.innerHTML = hours < 10 ? '0' + hours : hours;
    minute.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    second.innerHTML = seconds < 10 ? '0' + seconds : seconds;
  }
  let interval = setInterval(updateCountdown, 1000);
});