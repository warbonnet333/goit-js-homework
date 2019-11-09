"use strict";

const itemsList = document.querySelectorAll(".item");
console.log(`В списку ${itemsList.length} категорії`);

const categories = document.querySelector("#categories");
let arr = categories.children;

arr = [...arr].forEach(item => {
  const categogyName = item.firstElementChild.innerText;
  const categogyCounter = item.lastElementChild.children.length;
  console.log(`Категорія: ${categogyName}, Кількість: ${categogyCounter}`);
});
