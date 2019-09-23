"use strict";

const findLongestWord = function(string) {
  // console.log(string);
  string = string.split(" ");
  // console.log(string);
  let longestWord;
  let longestWordLength = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > longestWordLength) {
      longestWord = string[i];
      longestWordLength = string[i].length;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'forc
