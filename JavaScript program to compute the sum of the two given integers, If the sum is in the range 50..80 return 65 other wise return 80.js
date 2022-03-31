// function sortaSum(num1, num2) {
//   const num_sum = num1 + num2;

//   if (num_sum >= 50 && num_sum <= 80) {
//     return 65;
//   }
//   return 80;
// }


const sortaSum = (num1, num2) => (num1 + num2 >= 50 && num1 + num2 <= 80 ? 65 : 80);

console.log(sortaSum(30,20));
console.log(sortaSum(90,80));