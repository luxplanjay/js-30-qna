"use strict";

// 7-е задание автопроверки
// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let index = 0; index < orders.length; index++) {
//   const order = orders[index];
//   const message = composeMessage.call(order, index + 1);
//   messages.push(message);
// }

// const messages = orders.map(function (order, index) {
//   return composeMessage.call(order, index + 1);
// });

// console.table(messages);

// Свой map
// 1. Создает пустой массив
// 2. Возвращает этот массив
// 3. Вызывает callback для каждого элемент массива array
// 4. Записывает результат каждого вызова callback в новый массив result

// function map(array, callback) {
//   const result = [];

//   for (let index = 0; index < array.length; index++) {
//     result.push(callback(array[index], index));
//   }

//   return result;
// }

// const messages = map(orders, function (order, index) {
//   return composeMessage.call(order, index + 1);
// });

// console.log(messages);

// Полная стоимость

const calcPrice = function (value, tax) {
  return value + value * tax;
};

// console.log(calcPrice(100, 0.3));
// console.log(calcPrice(200, 0.3));
// console.log(calcPrice(300, 0.3));

// console.log(calcPrice(150, 0.1));
// console.log(calcPrice(250, 0.1));
// console.log(calcPrice(350, 0.1));

const makeCalcPrice = function (tax) {
  return function (value) {
    return value + value * tax;
  };
};

// const makeCalcPrice = tax => value => value + value * tax;

const calcUSAPrice = makeCalcPrice(0.3);
console.log(calcUSAPrice(100));
console.log(calcUSAPrice(200));
console.log(calcUSAPrice(300));

const calcIndiaPrice = makeCalcPrice(0.1);
console.log(calcIndiaPrice(150));
console.log(calcIndiaPrice(250));
console.log(calcIndiaPrice(350));
