// function removeSubStr(position, string) {
//   var letter = string.replace(string[position], "");
//   return letter
// }

console.log(removeSubStr(3, "Javascript"));

function removeSubStr(position, string) {
  part1 = string.substring(0, position);
  part2 = string.substring(position + 1, string.length);
  return part1 + part2;
}
