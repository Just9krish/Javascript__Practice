// function checkNum(num1, num2) {
//   if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkNum(num1, num2, num3) {
    return num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99 || num3 >= 50 && num3 <= 99 ? true : false;
}

console.log(checkNum(12, 88 , 45));
