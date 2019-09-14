const total = 100;
const ordered = 20;
let type;

if (ordered > total) {
  type = "Hа складе недостаточно твоаров!";
} else {
  type = "Заказ оформлен, с вами свяжется менеджер";
}

console.log(type);
