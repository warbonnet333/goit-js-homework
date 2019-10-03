"use strict";

function checkForSpam(str) {
  let answer;
  str = str.toLowerCase();
  return str.includes("sale") || str.includes("spam");
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
