function firstHalf(str) {
  return str.length % 2 == 0 ? str.slice(0, str.length / 2) : false;
}

console.log(firstHalf("Python"));  
console.log(firstHalf("JavaScript")); 
console.log(firstHalf("PHP"));
