"use strict";

let bestEmployee;

function findBestEmployee(employees) {
  let total = 0;

  const entries = Object.entries(employees);
  for (const entry of entries) {
    if (entry[1] > total) {
      total = entry[1];
      bestEmployee = entry[0];
    }
  }
  return `Best employee is ${bestEmployee} with score ${total}`;
  // console.log(total);
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
