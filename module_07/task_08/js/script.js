"use strict";

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-action=render]");
const destroyBtn = document.querySelector("button[data-action=destroy]");
const container = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  container.classList.add("boxes");
  let startBoxSize = 30;
  do {
    amount = Number(input.value);
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = startBoxSize + "px";
    box.style.height = startBoxSize + "px";
    box.style.backgroundColor = `${getRandomRgb()}`;
    container.appendChild(box);
    startBoxSize += 10;
  } while (container.children.length < amount);
}

function destroyBoxes() {
  [...container.children].forEach(box => box.remove());
}

function getRandomRgb() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return `rgb(${r},${g},${b})`;
}
