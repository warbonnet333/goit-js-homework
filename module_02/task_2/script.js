"use strict";

let price = 0;

function calculateEngravingPrice(message, pricePerWord) {
  return price = message.split(" ").length * pricePerWord;
}

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20));
