"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

function createList(array) {
  const ingredientsList = document.querySelector("#ingredients");
  for (let arr of array) {
    const listItem = document.createElement("li");
    listItem.textContent = arr;
    ingredientsList.appendChild(listItem);
  }
  return ingredientsList;
}

console.log(createList(ingredients));
