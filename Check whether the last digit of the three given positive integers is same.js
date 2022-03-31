function checkNumLastDigit(num1, num2, num3) {
  if (num1 > 0 && num2 > 0 && num3 > 0) {
    return (
      num1 % 10 == num2 % 10 && num2 % 10 == num3 % 10 && num3 % 10 == num1 % 10
    );
  } else {
    return false;
  }
}

console.log(checkNumLastDigit(40, 500, 4930));
console.log(checkNumLastDigit(-20, 30, 400));
console.log(checkNumLastDigit(20, -30, 400));
console.log(checkNumLastDigit(20, 30, -400));
