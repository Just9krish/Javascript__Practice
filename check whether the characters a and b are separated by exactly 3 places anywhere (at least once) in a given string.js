// function checkAandBhaveExactDifferenceOfThree (str) {
//     return (/a...b/).test(str) || (/b...a/).test(str)
// }

function checkAandBhaveExactDifferenceOfThree(str) {
  str = str.split("");
  let a = str.indexOf("a");
  let b = str.indexOf("b");
  let place = Math.abs(a - b);

  return place === 4;
}

console.log(checkAandBhaveExactDifferenceOfThree("Chainsbreak"));
console.log(checkAandBhaveExactDifferenceOfThree("pane borrowed"));
console.log(checkAandBhaveExactDifferenceOfThree("abCheck"));
