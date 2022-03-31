function check5thPos(str) {
  if (str.length < 6) {
    return str;
  }

  let result_str = str;

  if (str.substring(10, 4) == "Script") {
    result_str = str.substring(0, 4) + str.substring(10, str.length);
  }
  return result_str;
}

// const check5thPos = (str) => {
//   return str.slice(4) === "Script" ? str.slice(0, 4) : str;
// };


console.log(check5thPos("JavaScriptfgfdf"));
console.log(check5thPos("CoffeeScript"));
