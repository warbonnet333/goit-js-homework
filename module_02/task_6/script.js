"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Число?");
  if (Number.isNaN(Number(input))) {
    alert("'Было введено не число, попробуйте еще раз'");
  } else {
    numbers.push(input);
  }
  console.log(numbers);
} while (input !== null);

for (let number of numbers) {
  total += Number(number);
}
alert(`Общая сумма чисел равна ${total}`);
