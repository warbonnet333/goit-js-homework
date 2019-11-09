"use strict";

const input = document.querySelector("input");

input.addEventListener("blur", checkLength);

function checkLength(event) {
  const minLength = input.dataset.length;
  const inputLength = event.currentTarget.value.length;
  if (inputLength >= minLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (inputLength <= minLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
