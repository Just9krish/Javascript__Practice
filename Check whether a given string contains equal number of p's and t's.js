function equalNoPsandTs(str) {
  let pCount = 0;
  let tCount = 0;
  for (i = 0; i <= str.length; i++) {
    if (str[i] == "p" || str[i] == "P") {
      pCount++;
    } else if (str[i] == "t" || str[i] == "s") {
      tCount++;
    }
  }

  if (pCount == tCount) {
    console.log("P and T are in equal numbers");
  } else {
    console.log("they are not in equal numbers");
  }

  return str
}

console.log(equalNoPsandTs("paatpss"));
console.log(equalNoPsandTs("paatps"));
