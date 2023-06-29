const minutesEL = document.querySelector("#minutes");
const secondsEL = document.querySelector("#seconds");
const millisecondsEL = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#start-btn");
const pauseBtn = document.querySelector("#pause-btn");
const resumeBtn = document.querySelector("#resume-btn");
const resetBtn = document.querySelector("#reset-btn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);


function startTimer() {

    interval = setInterval (() =>{

        if(!isPaused) {

            milliseconds += 10;

            if(milliseconds === 1000) {
                seconds ++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEL.textContent = formatTime(minutes);
            secondsEL.textContent = formatTime(seconds);
            millisecondsEL.textContent = formatMilliseconds(milliseconds);

        }
    }, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";

}

function pauseTimer () {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer () {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer () {
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    minutes = 0;
    isPaused = false;

    minutesEL.textContent = "00";
    secondsEL.textContent = "00";
    millisecondsEL.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}