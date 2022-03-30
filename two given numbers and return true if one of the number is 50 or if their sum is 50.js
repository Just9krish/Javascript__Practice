const checkNum = (num1, num2) => {
return num1 + num2 === 50 || num1 === 50 || num2 === 50 ? true : false
};

console.log(checkNum(34, 50));
console.log(checkNum(25, 25));
console.log(checkNum(34, 89));