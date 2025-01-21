let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");
let switchBtn = document.querySelector("#switch-btn");

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = hours >= 12 ? "PM" : "AM";

    hrs.innerHTML = (hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, "0");
    min.innerHTML = minutes.toString().padStart(2, "0");
    sec.innerHTML = seconds.toString().padStart(2, "0");
    ampm.innerHTML = period;
}, 1000);

switchBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});