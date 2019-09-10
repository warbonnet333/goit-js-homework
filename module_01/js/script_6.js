let input;
let total = 0;
let message;
let userInput;

do {
  input = prompt("Number??");
  userInput = Number(input);
  total += userInput;
  console.log(total);
} while (input !== null);

if (input === null) {
  message = `Number is ${total}`;
}
alert(message);

// let input;
// let total = 0;
// let message;
// let userInput;

// do {
//   input = prompt("Number??");
//   userInput = Number(input);
//   total += userInput;
//   console.log(total);
// } while (input !== null && typeof input !== Number());

// if (input === null) {
//   message = `Number is ${total}`;
// } else if (typeof input === Number()) {
//   message = "Try again";
// }
// alert(message);
