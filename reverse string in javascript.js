// function reverseStr (str) {
//     return str.split("").reverse().join("");
// }

function reverseStr(str) {
  let newStr = "";

  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseStr("welcome"));
