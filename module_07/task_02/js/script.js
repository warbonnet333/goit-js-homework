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
  let neededArr = [];
  for (let arr of array) {
    const listItem = document.createElement("li");
    listItem.textContent = arr;
    neededArr.push(listItem);
  }

  return ingredientsList.append(...neededArr);
}

console.log(createList(ingredients));
