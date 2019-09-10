let message;
const ADMIN_PASSWORD = "2525";
let password = prompt("Password?", "");

if (password === "2525") {
  message = "Добро пожаловать!";
} else if (password === "") {
  message = "Доступ запрещен, неверный пароль!";
} else if (password === null) {
  message = "Отменено пользователем!";
} else{
message = "Доступ запрещен, неверный пароль!";
}

alert(message);
