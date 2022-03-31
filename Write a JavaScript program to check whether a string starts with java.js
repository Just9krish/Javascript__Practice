function checStartWithkJava(string) {
  if (string.length < 4) {
    return false;
  }

  let startWith = string.substring(0, 4);
  if (startWith == "Java") {
    return true;
  } else {
    return false;
  }
}

// const checStartWithkJava = (string) => {
//   if (string.startsWith("Java")) {
//     return true;
//   } else {
//     return false;
//   }
// };

console.log(checStartWithkJava("Javascript"));
