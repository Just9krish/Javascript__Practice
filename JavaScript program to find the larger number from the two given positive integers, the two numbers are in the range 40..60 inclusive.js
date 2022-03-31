function max_num_range(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    if (num1 === num2) {
      return "Numbers are same";
    } else if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    return "Number don't fit in range";
  }
}

console.log(max_num_range(50, 45));
console.log(max_num_range(25, 60));
console.log(max_num_range(45, 80));
