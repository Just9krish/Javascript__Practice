// function stringCopies(str, n) {
//   if (n < 0) {
//     return false;
//   } else {
//     return str.repeat(n);
//   }
// }

const stringCopies = (str, n) => {
  return n < 0 ? false : str.repeat(n);
};


console.log(stringCopies("sfafe", 4));
