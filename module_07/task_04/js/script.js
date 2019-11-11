"use strict";

const refs = {
  counter: document.querySelector("#counter"),
  value: document.querySelector("#value")
};

const actions = {
  state: {
    value: 0
  },
  decrement() {
    this.state.value -= 1;
  },
  increment() {
    this.state.value += 1;
  }
};

const changeValue = ({ target }) => {
  actions[target.dataset.action]();
  refs.value.textContent = actions.state.value;
};

refs.counter.addEventListener("click", changeValue);

// let counyerValue = 0;
// const value = document.querySelector("#value");

// const decrement = document.querySelector("button[data-action=decrement]");
// const increment = document.querySelector("button[data-action=increment]");

// function incrementValue() {
//   counyerValue = Number(counyerValue);
//   value.textContent = counyerValue += 1;
//   return counyerValue;
// }

// function decrementValue() {
//   counyerValue = Number(counyerValue);
//   value.textContent = counyerValue -= 1;
//   return counyerValue;
// }

// increment.addEventListener("click", incrementValue);
// decrement.addEventListener("click", decrementValue);
