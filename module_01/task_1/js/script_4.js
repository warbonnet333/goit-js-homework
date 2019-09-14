const pricePerDroid = 3000;
const credit = 232580;
let neededDroids = prompt("Скільки дроїдів потрібно?");
let neededPrice = pricePerDroid * neededDroids;
let change = credit - neededPrice;
let message;

if (neededDroids === null) {
  message = "Отменено пользователем!";
} else if (neededPrice <= credit) {
  message = `Вы купили ${neededDroids} дроидов, на счету осталось ${change} кредитов.`;
} else {
  message = "Недостаточно средств на счету!";
}

alert(message);
