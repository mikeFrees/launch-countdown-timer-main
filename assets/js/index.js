const timeLeft = {
    "days": 14,
    "hours": 0,
    "minutes": 0,
    "seconds": 0
};

const days = document.getElementsByClassName("days");
const hours = document.getElementsByClassName("hours");
const minutes = document.getElementsByClassName("minutes");
const seconds = document.getElementsByClassName("seconds");

setInterval(tick, 1000);

function tick() {
    changeTime();
    displayData();
}

function displayData() {
    days[0].textContent = formatData(timeLeft.days);
    hours[0].textContent = formatData(timeLeft.hours);
    minutes[0].textContent = formatData(timeLeft.minutes);
    seconds[0].textContent = formatData(timeLeft.seconds);
    setTimeout(() => {
    days[1].textContent = formatData(timeLeft.days);
    hours[1].textContent = formatData(timeLeft.hours);
    minutes[1].textContent = formatData(timeLeft.minutes);
    seconds[1].textContent = formatData(timeLeft.seconds);}, 400);
    setTimeout(() => {
    days[2].textContent = formatData(timeLeft.days);
    hours[2].textContent = formatData(timeLeft.hours);
    minutes[2].textContent = formatData(timeLeft.minutes);
    seconds[2].textContent = formatData(timeLeft.seconds);}, 250);
}

function formatData(number) {
    return String(number).padStart(2,"0");
}

function changeTime() {
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        resetTime();
    } else if (timeLeft.days !== 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        dayChange();
    } else if (timeLeft.hours !== 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        hourChange();
    } else if (timeLeft.minutes !== 0 && timeLeft.seconds === 0) {
        minuteChange();
    } else {
        secondChange();
    }
}

function dayChange() {
    timeLeft.days -= 1;
    timeLeft.hours = 23;
    timeLeft.minutes = 59;
    timeLeft.seconds = 59;

    days[2].classList.add("turn-animation");
    setTimeout(() => {days[2].classList.remove("turn-animation");}, 500);
    hours[2].classList.add("turn-animation");
    setTimeout(() => {hours[2].classList.remove("turn-animation");}, 500);
    minutes[2].classList.add("turn-animation");
    setTimeout(() => {minutes[2].classList.remove("turn-animation");}, 500);
    seconds[2].classList.add("turn-animation");
    setTimeout(() => {seconds[2].classList.remove("turn-animation");}, 500);
}

function hourChange() {
    timeLeft.hours -= 1;
    timeLeft.minutes = 59;
    timeLeft.seconds = 59;

    hours[2].classList.add("turn-animation");
    setTimeout(() => {hours[2].classList.remove("turn-animation");}, 500);
    minutes[2].classList.add("turn-animation");
    setTimeout(() => {minutes[2].classList.remove("turn-animation");}, 500);
    seconds[2].classList.add("turn-animation");
    setTimeout(() => {seconds[2].classList.remove("turn-animation");}, 500);
}

function minuteChange() {
    timeLeft.minutes -= 1;
    timeLeft.seconds = 59;

    minutes[2].classList.add("turn-animation");
    setTimeout(() => {minutes[2].classList.remove("turn-animation");}, 500);
    seconds[2].classList.add("turn-animation");
    setTimeout(() => {seconds[2].classList.remove("turn-animation");}, 500);
}

function secondChange() {
    timeLeft.seconds -= 1;

    seconds[2].classList.add("turn-animation");
    setTimeout(() => {seconds[2].classList.remove("turn-animation");}, 500);
}

function resetTime() {
    timeLeft.days = 14;
    timeLeft.hours = 0;
    timeLeft.minutes = 0;
    timeLeft.seconds = 0;

    days[2].classList.add("turn-animation");
    setTimeout(() => {days[2].classList.remove("turn-animation");}, 500);
    hours[2].classList.add("turn-animation");
    setTimeout(() => {hours[2].classList.remove("turn-animation");}, 500);
    minutes[2].classList.add("turn-animation");
    setTimeout(() => {minutes[2].classList.remove("turn-animation");}, 500);
    seconds[2].classList.add("turn-animation");
    setTimeout(() => {seconds[2].classList.remove("turn-animation");}, 500);
}