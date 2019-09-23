"use strict";

function checkForSpam(str) {
  let answer;
  str = str.toLowerCase();
  if (str.includes("sale") || str.includes("spam")) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
