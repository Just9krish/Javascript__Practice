function numDiff (n) {
    if (n <= 13 ){
        return 13 - n;
    } else {
        return (13 - n) * 2;
    }
}

console.log(numDiff(8));
console.log(numDiff(45));
console.log(numDiff(-34));