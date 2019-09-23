"use strict";

function logItems(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(`${array[index]} --- ${index + 1}`);
  }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
