function newString(str) {
  if (str.length >= 3) {
    let resultStr = str.substring(str.length - 3);
    return resultStr.repeat(4);
  } else {
    return false;
  }
}

console.log(newString("dfhiuefwu"));
console.log(newString("df"));
