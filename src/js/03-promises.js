// HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах,
// крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів,
// скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється,
// і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
// який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт,
// в якому будуть властивості position і delay зі значеннями однойменних параметрів.
// Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      console.log(shouldResolve);

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('form.form');
// console.log('🚀 ~ file: 03-promises.js:24 ~ form:', form);

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(form.elements.delay.value);
  //   console.log('🚀 ~ file: 03-promises.js:28 ~ delay:', delay);
  const step = Number(form.elements.step.value);
  //   console.log('🚀 ~ file: 03-promises.js:30 ~ step:', step);
  const amount = Number(form.elements.amount.value);
  //   console.log('🚀 ~ file: 03-promises.js:32 ~ amount:', amount);

  let position = 0;

  for (let i = 1; i <= amount; i += 1) {
    position += i;

    const promiseDelay = delay + (i - 1) * step;

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
