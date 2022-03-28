const toDay = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = toDay.getDay();

console.log(`Today is : ${days[day]}.`);

let hour = toDay.getHours();
let minute = toDay.getMinutes();
let second = toDay.getSeconds();
let prepand = hour >= 12 ? "PM" : "AM";

hour = hour >= 12 ? hour - 12 : hour;
if (hour < 10) {
  hour = "0" + hour;
}

if (minute < 10) {
  minute = "0" + minute;
}
if (second < 10) {
  second = "0" + second;
}

if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}
console.log(`Current time is : ${hour} : ${minute} : ${second} ${prepand}`);
