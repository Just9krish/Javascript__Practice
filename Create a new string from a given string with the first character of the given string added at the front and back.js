// function frontBack(str) {
//   first = str.substring(0, 1);
//   return first + str + first;
// }

const frontBack = (str) => {
  return (str = str.charAt(0) + str + str.charAt(0));
};

console.log(frontBack("sgteaggfds"));
