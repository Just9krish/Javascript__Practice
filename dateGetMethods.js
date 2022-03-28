const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();

a = d.getTime()
console.log(a);

console.log(d.getFullYear());
console.log(d.getMonth());

let month = months[d.getMonth()]
console.log(month); 

console.log(d.getDate());

console.log(d.getHours());
console.log(d.getDay());

console.log(days[d.getDay()]);