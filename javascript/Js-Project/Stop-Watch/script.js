let mint = document.querySelector("#min");
let sec = document.querySelector("#sec");
let Start = document.querySelector(".start");
let Stop = document.querySelector(".stop");
let restart = document.querySelector(".restart");

let minutes = 0, seconds = 0, isRunning = false, timer;

function updateDisplay() {
    mint.textContent = minutes < 10 ? "0" + minutes : minutes;
    sec.textContent = seconds < 10 ? "0" + seconds : seconds;
}

Start.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) { seconds = 0; minutes++; }
            updateDisplay();
        }, 1000);
    }
});

Stop.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

restart.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    minutes = seconds = 0;
    updateDisplay();
});