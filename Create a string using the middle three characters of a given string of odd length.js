function meddleThree(str) {
  if (str.length % 2 != 0) {
    let mid = (str.length + 1) / 2;
    return str.slice(mid - 2, mid + 1);
  }
  return str;
}

console.log(meddleThree("HTML5"));
console.log(meddleThree("Python"));
console.log(meddleThree("PHP"));
