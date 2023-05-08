// Напиши скрипт, який після натискання кнопки «Start»,
// раз на секунду змінює колір фону <body> на випадкове значення,
// використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtnRef = document.querySelector('[data-start]');
console.log(startBtnRef);
const stopBtnRef = document.querySelector('[data-stop]');
console.log(stopBtnRef);
const COLOR_DELAY = 1000;
const body = document.querySelector('body');
console.log('body:', body);
let timer = null;

startBtnRef.addEventListener('click', changeBackgroundColor);

stopBtnRef.addEventListener('click', stopChangeBackgroundColor);

function changeBackgroundColor() {
  timer = setInterval(() => {
    startBtnRef.setAttribute('disabled', '');
    body.style.backgroundColor = getRandomHexColor();
  }, COLOR_DELAY);
}

function stopChangeBackgroundColor() {
  startBtnRef.removeAttribute('disabled');
  clearTimeout(timer);
}
