let today = new Date();

let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

date < 10 ? "0" + date : date;
if (date < 10) {
  date = `0${date}`;
}
if (month < 10) {
  month = `0${month}`;
}

var nowDate = `${month}-${date}-${year}`;
console.log(nowDate);
nowDate = `${month}/${date}/${year}`;
console.log(nowDate);
nowDate = `${date}-${month}-${year}`;
console.log(nowDate);
nowDate = `${date}/${month}/${year}`;
console.log(nowDate);
