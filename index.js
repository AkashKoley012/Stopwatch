const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const lap = document.getElementById("lap");
const clearLap = document.getElementById("clearLap");
const mili_second = document.querySelector("#miliSecond .digit");
const second = document.querySelector("#second .digit");
const minute = document.querySelector("#minute .digit");
const hours = document.querySelector("#hours .digit");
const display = document.querySelector("#display");
const date_position = document.getElementById("date");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const today = new Date();
date_position.innerHTML = `${today.getDate()} ${months[today.getMonth()]} , ${today.getFullYear()}`;

var clear_stop,
    count = 0,
    lapCount = 1;
start.addEventListener("click", () => {
    stop.style.display = "block";
    start.style.display = "none";
    clear_stop = setInterval(() => {
        mili_second.innerHTML = count % 100 < 10 ? "0" + (count % 100) : count % 100;
        second.innerHTML = Math.floor(count / 100) % 60 < 10 ? "0" + (Math.floor(count / 100) % 60) : Math.floor(count / 100) % 60;
        minute.innerHTML = Math.floor(count / 6000) % 60 < 10 ? "0" + (Math.floor(count / 6000) % 60) : Math.floor(count / 6000) % 60;
        hours.innerHTML = Math.floor(count / 360000) % 24 < 10 ? "0" + (Math.floor(count / 360000) % 24) : Math.floor(count / 360000) % 24;

        count = (count + 1) % 8640000;
    }, 10);
});

stop.addEventListener("click", () => {
    stop.style.display = "none";
    start.style.display = "block";
    clearInterval(clear_stop);
});

reset.addEventListener("click", () => {
    clearInterval(clear_stop);
    stop.style.display = "none";
    start.style.display = "block";
    mili_second.innerHTML = "00";
    second.innerHTML = "00";
    minute.innerHTML = "00";
});

lap.addEventListener("click", () => {
    display.innerHTML =
        display.innerHTML +
        `<div class="container">
    <div class="number text">${lapCount++}</div>
    <div id="hours">
        <div class="digit">${hours.innerHTML}</div>
        <div class="text">Hr</div>
    </div>
    <div id="minute">
        <div class="digit">${minute.innerHTML}</div>
        <div class="text">Min</div>
    </div>
    <div id="second">
        <div class="digit">${second.innerHTML}</div>
        <div class="text">Sec</div>
    </div>
    <div id="miliSecond">
        <div class="digit">${mili_second.innerHTML}</div>
        <div class="text">Ms</div>
    </div>
</div>`;
    display.scrollTo(0, display.scrollHeight);
});

clearLap.addEventListener("click", () => {
    display.innerHTML = "";
});

display.scrollIntoView();
