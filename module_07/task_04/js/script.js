"use strict";

let counyerValue = 0;
const value = document.querySelector("#value");

const decrement = document.querySelector("button[data-action=decrement]");
const increment = document.querySelector("button[data-action=increment]");

function incrementValue() {
  counyerValue = Number(counyerValue);
  value.textContent = counyerValue += 1;
  return counyerValue;
}

function decrementValue() {
  counyerValue = Number(counyerValue);
  value.textContent = counyerValue -= 1;
  return counyerValue;
}

increment.addEventListener("click", incrementValue);
decrement.addEventListener("click", decrementValue);
