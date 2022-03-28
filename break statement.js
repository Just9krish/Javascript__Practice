var x = 1;
console.log("Entering the loop");
while (x < 20) {
  if (x == 5) {
    break; // breaks out of loop completely
  }
  x = x + 1;
  console.log(x);
}
console.log("Exiting the loop!");
