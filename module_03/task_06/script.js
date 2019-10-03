"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

function calculateTotalPrice(arr, productName) {
  let total;
  for (let item of arr) {
    const { name, price, quantity } = item;
    if (name === productName) {
      total = price * quantity;
    }
  }

  return total;
}

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
