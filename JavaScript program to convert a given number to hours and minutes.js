function convertTime (num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return `${hours} : ${minutes}` 
}

console.log((convertTime(456)))
console.log((convertTime(756)))
console.log((convertTime(136)))