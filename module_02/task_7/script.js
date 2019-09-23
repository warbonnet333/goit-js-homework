"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let message;

const isLoginValid = function(login) {
  if (login.length > 3 && login.length < 17) {
    message = true;
  } else {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  return message;
};

const isLoginUnique = function(allLogins, login) {
  // код
};

const addLogin = function(allLogins, login) {
  // код
};

// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'

console.log(isLoginValid("ddgfhgfdtgfyhfnfghgfbgff"));
