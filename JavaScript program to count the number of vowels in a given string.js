// function checkVowel(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

function checkVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.split("");
  let count = 0;
  str.forEach(function (vowel) {
    if (vowels.includes(vowel)) {
      count++;
    }
  });
  return count;
}

console.log(checkVowel("amit"));
console.log(checkVowel("rohit"));
console.log(checkVowel("ajfoewef"));
