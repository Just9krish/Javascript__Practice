const checkInt = (num1, num2) => {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0) ? true : false;
}

console.log(checkInt(-12,4));
console.log(checkInt(12, 4));