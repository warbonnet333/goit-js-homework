"use strict";

const rng = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rng.addEventListener("input", changeFontSize);

function changeFontSize() {
  let size = rng.value
  text.style.fontSize = size + "px"
}

