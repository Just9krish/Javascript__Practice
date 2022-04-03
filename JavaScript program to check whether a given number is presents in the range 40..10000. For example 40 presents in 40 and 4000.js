function checkDigit (range1, range2, num) {
    if (num < range1 || num > range2) {
        return false
    } else if (num >= range1  && num <= range2) {
        return true;
    } else {
        return false
    }
}

console.log(checkDigit(40, 4000, 45));  
console.log(checkDigit(80, 320, 79));  
console.log(checkDigit(89, 4000, 30));