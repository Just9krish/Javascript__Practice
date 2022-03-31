// function turnUpperFirstThreeChar(str) {
//   if (str.length < 4) {
//     return str.toUpperCase();
//   }

//   let front_part = str.substring(0, 3).toLowerCase();

//   let back_part = str.substring(3, str.length);

//   return front_part + back_part;
// }

const turnUpperFirstThreeChar = (str) => {
  const front_part = str.slice(0, 3).toLowerCase();
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return front_part + str.slice(3);
  }
};

console.log(turnUpperFirstThreeChar("PYthon"));
console.log(turnUpperFirstThreeChar("Py"));
console.log(turnUpperFirstThreeChar("JAVAScript"));
