function checkMultiply(num1, num2) {
  if (!((num1 % 7 == 0 || num1 % 11 == 0) && (num2 % 7 == 0 || num2 % 11 == 0))) {
    return num1 % 7 == 0 || num1 % 11 == 0 || num2 % 7 == 0 || num2 % 11 == 0;
  } else return false;
}



console.log(checkMultiply(14, 21));
console.log(checkMultiply(14, 20));
console.log(checkMultiply(16, 20));
