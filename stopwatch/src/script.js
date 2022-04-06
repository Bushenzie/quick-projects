import { Stopwatch } from "./stopwatch.js";

//Elements 
const minutes_ELEMENT = document.getElementById("minutes");
const hours_ELEMENT = document.getElementById("hours");
const seconds_ELEMENT = document.getElementById("seconds");
const miliseconds_ELEMENT = document.getElementById("miliseconds");

const start_BUTTON = document.getElementById("start");
const stop_BUTTON = document.getElementById("stop");
const pause_BUTTON = document.getElementById("pause");



//Variables
const stopwatch = new Stopwatch();
let interval;

//Functions
const Start = function StopwatchStart() {
    interval = setInterval(() => {
        stopwatch.IncreaseMili();
        SetDOMValues();
    }, 10);
}

const Pause = function StopwatchPause() {
    clearInterval(interval);
}

const Stop = function StopwatchStop() {
    clearInterval(interval);
    stopwatch.Reset();
    SetDOMValues();
}

const SetClicked = function Clicked(el, status) {
    if (status) {
        el.classList.add("not-clickable");
    } else if (!status) {
        el.classList.remove("not-clickable");
    }
}

const SetDOMValues = function SettingDOMValues() {
    //MILISECONDS
    if (stopwatch.miliseconds < 10) miliseconds_ELEMENT.textContent = "0" + stopwatch.miliseconds;
    else miliseconds_ELEMENT.textContent = stopwatch.miliseconds;
    //SECONDS
    if (stopwatch.seconds < 10) seconds_ELEMENT.textContent = "0" + stopwatch.seconds;
    else seconds_ELEMENT.textContent = stopwatch.seconds;
    //MINUTES 
    if (stopwatch.minutes < 10) minutes_ELEMENT.textContent = "0" + stopwatch.minutes;
    else minutes_ELEMENT.textContent = stopwatch.minutes;
    //HOURS
    if (stopwatch.hours < 10) hours_ELEMENT.textContent = "0" + stopwatch.hours;
    else hours_ELEMENT.textContent = stopwatch.hours;
}



//Events
start_BUTTON.addEventListener("click", () => {
    if (![...start_BUTTON.classList].includes("not-clickable")) {
        Start();
        SetClicked(start_BUTTON, true);
        SetClicked(stop_BUTTON, false);
        SetClicked(pause_BUTTON, false);
    }
});

stop_BUTTON.addEventListener("click", () => {
    if (![...stop_BUTTON.classList].includes("not-clickable")) {
        Stop();
        SetClicked(start_BUTTON, false);
        SetClicked(stop_BUTTON, true);
        SetClicked(pause_BUTTON, true);
    }
})

pause_BUTTON.addEventListener("click", () => {
    if (![...pause_BUTTON.classList].includes("not-clickable")) {
        Pause();
        SetClicked(start_BUTTON, false);
        SetClicked(stop_BUTTON, false);
        SetClicked(pause_BUTTON, true);
    }
});