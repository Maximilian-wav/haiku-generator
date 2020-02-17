//random number tests

var oneS = [
  "mid",
  "dark",
  "cold",
  "young",
  "great",
  "flow",
  "zen",
  "want",
  "no",
  "free",
  "fix"
];
var num1 = Math.floor(Math.random() * 11) % oneS.length;
var words = oneS[num1];

console.log(num1);
console.log(words);
