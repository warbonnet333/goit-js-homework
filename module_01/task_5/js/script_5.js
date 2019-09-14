const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let message;

let order = prompt("Куда сделать заказ?").toLocaleLowerCase();

String.prototype.firstLetterCaps = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

switch (order) {
  case "китай":
    message = `Доставка в ${order.firstLetterCaps()} будет стоить ${priceChina} кредитов`;
    break;
  case "чили":
    message = `Доставка в ${order.firstLetterCaps()} будет стоить ${priceChili} кредитов`;
    break;
  case "австралия":
    message = `Доставка в ${order.firstLetterCaps()} будет стоить ${priceAustralia} кредитов`;
    break;
  case "индия":
    message = `Доставка в ${order.firstLetterCaps()} будет стоить ${priceIndia} кредитов`;
    break;
  case "ямайка":
    message = `Доставка в ${order.firstLetterCaps()} будет стоить ${priceJamaica} кредитов`;
    break;
  default:
    message = "В вашей стране доставка не доступна";
}

alert(message);
