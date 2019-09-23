"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let messageValid;
let messageUnique;
let messageOfAddition;

const isLoginValid = function(login) {
  if (login.length > 3 && login.length < 17) {
    messageValid = true;
  } else {
    messageValid = false;
  }
  return messageValid;
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    messageUnique = false;
  } else {
    messageUnique = true;
  }
  return messageUnique;
};

const addLogin = function(allLogins, login) {
  if (
    isLoginValid(login) === true &&
    isLoginUnique(allLogins, login) === true
  ) {
    allLogins.push(login);
    console.log(logins);
    messageOfAddition = "Логин успешно добавлен!";
  } else if (isLoginValid(login) === false) {
    messageOfAddition = "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (isLoginUnique(allLogins, login) === false) {
    messageOfAddition = "Такой логин уже используется!";
  }
  return messageOfAddition;
};
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
