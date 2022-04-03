function capEachWord(str) {
  str = str.split(" ");

  for (i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}

console.log(
  capEachWord(
    "Write a JavaScript program to capitalize the first letter of each word of a given string."
  )
);
