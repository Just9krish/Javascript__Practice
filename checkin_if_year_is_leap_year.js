function leapYear (year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(leapYear(2013));
console.log(leapYear(2014));
console.log(leapYear(2015));
console.log(leapYear(2016));
console.log(leapYear(2017));
console.log(leapYear(2018));
console.log(leapYear(2019));
console.log(leapYear(2020));
console.log(leapYear(2021));
console.log(leapYear(2022));