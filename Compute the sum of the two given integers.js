const findSum = (num1, num2) => {
  return num1 === num2 ? 3 * (num1 + num2) : num1 + num2;
};

console.log(findSum(12, 54));
console.log(findSum(12, 12));