function firstToLast(string) {
    string.length <= 1 ? string : midChar = string.substring(1, string.length - 1);
    return string.charAt(string.length - 1) + midChar + string.charAt(0);
}

console.log(firstToLast('adfag'))