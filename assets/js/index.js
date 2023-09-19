/*const timeLeft = fetch('https://mikes-launch-countdown.netlify.app/assets/data/time.json')
    .then((response) => response.json()); */

let timeLeft = {
    "days": "14",
    "hours": "00",
    "minutes": "00",
    "seconds": "1000"
};

setInterval(tick(), 1000);

function tick() {
    switch (timeLeft) {
        case (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0):
          resetTime();
          break;
        case (timeLeft.days !== 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0):
            dayChange();
            break;
        case (timeLeft.hours !== 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0):
            hourChange();
            break;
        case (timeLeft.minutes !== 0 && timeLeft.seconds === 0):
            minuteChange();
            break;
        case (timeLeft.seconds !== 0):
            secondChange();
            break;
        default:
          console.log(`bug`);
      }
    return;
}

function dayChange(timeLeft) {
    timeLeft.days -= 1;
    timeLeft.hours = 23;
    timeLeft.minutes = 59;
    timeLeft.seconds = 59;
}

function hourChange(timeLeft) {
    timeLeft.hours -= 1;
    timeLeft.minutes = 59;
    timeLeft.seconds = 59;
}

function minuteChange(timeLeft) {
    timeLeft.minutes -= 1;
    timeLeft.seconds = 59;
}

function secondChange(timeLeft) {
    timeLeft.seconds -= 1;
}

function resetTime(timeLeft) {
    timeLeft.days = 14;
    timeLeft.hours = 0;
    timeLeft.minutes = 0;
    timeLeft.seconds = 0;
}