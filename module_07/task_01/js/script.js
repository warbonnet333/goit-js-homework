"use strict";

const itemsList = document.querySelectorAll(".item");
console.log(`В списку ${itemsList.length} категорії`);

function showCategories() {
  const categories = document.querySelector("#categories");
  const res = categories.children.length;
  const srt = [...categories.children]
    .map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
    .join(" ");

  console.log(srt);
}

showCategories();

// function showCategories() {
//   const items = document.querySelectorAll(".item");
//   for (let i of [...items]) {
//     const itemName = i.querySelector("h2");
//     const list = i.querySelector("ul");
//     console.log(
//       `Категория: ${itemName.textContent}; Количество элементов: ${list.children.length}`
//     );
//   }
// }
