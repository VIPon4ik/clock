/**
  |============================
  | СТИЛІЗАЦІЯ ГОДИННИКА
  |============================
*/
var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

/**
  |============================
  | МІЙ JS
  |============================
*/

const daysName = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
const monthNames = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

const refs = {
    hourHand: document.querySelector(".hour-hand"), 
    minutesHand: document.querySelector(".minute-hand"), 
    secondsHand: document.querySelector(".second-hand"), 
    weekDay: document.querySelector(".day-of-week"),
    day: document.querySelector(".day-num"),
    month: document.querySelector(".month"),
    year: document.querySelector(".year"),
    digitalClock: document.querySelector(".digit-clock"),
}

const countClock = () => {
    const currentDate = new Date();
    
    const weekDay = currentDate.getDay();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    refs.weekDay.textContent = daysName[weekDay];
    refs.day.textContent = day;
    refs.month.textContent = monthNames[month];
    refs.year.textContent = year;

    refs.digitalClock.textContent = currentDate.toLocaleTimeString("uk-UA")

    const secondsDeg = currentDate.getSeconds() * 6;
    const minutesDeg = currentDate.getMinutes() * 6 + secondsDeg / 60;
    const hourDeg = currentDate.getHours() * 30 + minutesDeg / 12;

    refs.secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
    refs.minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
    refs.hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

countClock();

setInterval(countClock, 1000);
