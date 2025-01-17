const countdownText = document.getElementById('countdown-text');
const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');

document.getElementById('startButton').addEventListener('click', () => {
  const inputDate = document.getElementById('countdownInput').value;
  if (!inputDate) {
    return alert('Please select a date and time.');
  }

  const targetDate = new Date(inputDate).getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownText.innerHTML = "Let's Enjoy The Party!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    day.innerHTML = days < 10 ? '0' + days : days;
    hour.innerHTML = hours < 10 ? '0' + hours : hours;
    minute.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    second.innerHTML = seconds < 10 ? '0' + seconds : seconds;
  };

  const interval = setInterval(updateCountdown, 1000);
});
