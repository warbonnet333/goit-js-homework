"use strict";

function getAllPropValues(array, prop) {
  const nededProps = [];

  for (let arr of array) {
    if (prop in arr) {
      nededProps.push(arr[prop]);
    }
  }

  return nededProps;
}

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];
// console.log(products[1]);

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
