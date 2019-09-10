const priceChina = 100;
const priceChili = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
const countryNameChina = "Китай";
const countryNameChili = "Чили";
const countryNameAustralia = "Австралия";
const countryNameIndia = "Индия";
const countryNameJamaica = "Ямайка";
let message;

let order = prompt("Куда сделать заказ?").toLocaleLowerCase();

switch (order) {
  case "китай":
    message = `Доставка в ${countryNameChina} будет стоить ${priceChina} кредитов`;
    break;
  case "чили":
    message = `Доставка в ${countryNameChili} будет стоить ${priceChili} кредитов`;
    break;
  case "австралия":
    message = `Доставка в ${countryNameAustralia} будет стоить ${priceAustralia} кредитов`;
    break;
  case "индия":
    message = `Доставка в ${countryNameIndia} будет стоить ${priceIndia} кредитов`;
    break;
  case "ямайка":
    message = `Доставка в ${countryNameJamaica} будет стоить ${priceJamaica} кредитов`;
    break;
  default:
    message = "В вашей стране доставка не доступна";
}

alert(message);
