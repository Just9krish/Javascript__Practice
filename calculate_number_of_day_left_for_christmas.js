const today = new Date();
console.log(today);

const xmas = new Date(today.getFullYear(), 11, 25);
console.log(xmas);

if (today.getMonth() == 11 && today.getDate() > 25) {
  xmas.setFullYear(xmas.getFullYear() + 1);
}

const oneDay = 1000 * 60 * 60 * 24;
const timeForXmax = xmas.getTime() - today.getTime();

console.log(`${Math.ceil(timeForXmax / oneDay)} days left for Christmas!`);
