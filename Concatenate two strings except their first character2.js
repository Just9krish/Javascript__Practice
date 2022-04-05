function withoutFirstAndEnd (str) {
    return str.substring(1, str.length -1)
}

console.log(withoutFirstAndEnd('JavaScript'));
console.log(withoutFirstAndEnd('JS'));
console.log(withoutFirstAndEnd('PHP'));