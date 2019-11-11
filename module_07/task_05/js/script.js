"use strict";

// const refs = {
//   userInput: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
//   };
  
//   refs.userInput.addEventListener('input', () => {
//   refs.output.textContent = refs.userInput.value || 'незнакомец';
//   });

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", hendleInput);

function hendleInput(event) {
  output.textContent = event.currentTarget.value || "незнакомец";
}
