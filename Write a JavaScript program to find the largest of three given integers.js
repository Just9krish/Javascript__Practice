// function checkMaxValue(num1, num2, num3) {
//   max_value = 0;

//   if (num1 > num2) {
//     max_value = num1;
//   } else {
//     max_value = num2;
//   }

//   if (max_value < num3) {
//     max_value = z;
//   }

//   return max_value;
// }

function checkMaxValue(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(checkMaxValue(1, 0, 1));
console.log(checkMaxValue(-1, 0, -10));
console.log(checkMaxValue(65, 32, 11));
