// Напиши скрипт таймера, який здійснює зворотний відлік
// до певної дати.
// Такий таймер може використовуватися у блогах та
// інтернет-магазинах, сторінках реєстрації подій,
// під час технічного обслуговування тощо.

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// const inputRef = document.querySelector('#datetime-picker');
// console.log('🚀 ~ file: 02-timer.js:11 ~ inputRef:', inputRef);

const COUNT_DALAY = 1000;

const startBtn = document.querySelector('button[data-start');
// console.log('🚀 ~ file: 02-timer.js:14 ~ startBtn:', startBtn);

const valueOfDays = document.querySelector('.value[data-days]');
const valueOfHours = document.querySelector('.value[data-hours]');
const valueOfMinutes = document.querySelector('.value[data-minutes]');
const valueOfSeconds = document.querySelector('.value[data-seconds]');

// console.log('🚀 ~ file: 02-timer.js:14 ~ valueOfDays:', valueOfDays);
// console.log('🚀 ~ file: 02-timer.js:16 ~ valueOfHours:', valueOfHours);
// console.log('🚀 ~ file: 02-timer.js:18 ~ valueOfMinutes:', valueOfMinutes);
// console.log('🚀 ~ file: 02-timer.js:20 ~ valueOfSeconds:', valueOfSeconds);

startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = Date.now();
    let chooseDate = selectedDates[0].getTime();

    if (chooseDate < currentDate) {
      alert('Please choose a date in the future');
    }

    startBtn.removeAttribute('disabled');
    startBtn.addEventListener('click', () => {
      setInterval(() => {
        const currentDate = Date.now();
        const differenceTime = chooseDate - currentDate;
        const timeToSelectedDate = convertMs(differenceTime);

        updateTimer(timeToSelectedDate);
      }, COUNT_DALAY);
    });
  },
};

flatpickr('#datetime-picker', options);

function updateTimer({ days, hours, minutes, seconds }) {
  valueOfDays.textContent = `${days}`;
  valueOfHours.textContent = `${hours}`;
  valueOfMinutes.textContent = `${minutes}`;
  valueOfSeconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  const formatOfValue = value.toString().padStart(2, '0');

  return formatOfValue;
}

function convertMs(ms) {
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
