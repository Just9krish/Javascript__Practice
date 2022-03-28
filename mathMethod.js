console.log(Math.sin(270 * Math.PI / 180));     // returns 1 (the sine of 90 degrees) 

// console.log(Math.floor(Math.random() * 100))
// console.log(Math.floor(Math.random() * 100) + 1)
let b = 1249;

console.log((Math.round(b/100)*100));


function myRadom(min, max, vlue) {
    return Math.floor(Math.random() * min) + min;
}

console.log(myRadom(12))

function printPage() {
    window.print
}