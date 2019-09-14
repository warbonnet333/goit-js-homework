let message;
const ADMIN_PASSWORD = "25252525";
let password = prompt("Password?", "");

if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (password === "") {
  message = "Доступ запрещен, неверный пароль!";
} else if (password === null) {
  message = "Отменено пользователем!";
} else{
message = "Доступ запрещен, неверный пароль!";
}

alert(message);
