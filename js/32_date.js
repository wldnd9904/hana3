import * as dateutils from "./utils..js/dateutils.js";

// let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// for (i = 0; i < 1000000000; i++) arr[Math.ceil(Math.random() * 10) - 1]++;
// console.log(arr);

console.log("-------------");

// 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.

const d1 = new Date();
d1.setFullYear(1970);
d1.setMonth(0);
d1.setDate(1);
console.log(d1);

const d2 = new Date();
d2.setFullYear(1970);
d2.setMonth(0);
d2.setDate(2);
console.log(d2);

console.log((d1 - d2) / 1000);

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
let d3 = new Date();
d3.setDate(1);
d3.setMonth(d3.getMonth() + 1);
d3.setDate(-1);
const lastDate = d3.getDate();
console.log(lastDate);
let days = new Array(5)
  .fill(0)
  .map((_) => Math.ceil(Math.random() * lastDate))
  .map((date) => {
    const day = new Date();
    day.setDate(date);
    return day;
  });
console.log(days);
days.sort((a, b) => a - b);
console.log(days);
// 내년(2025년)의 오늘(2월 1일)의 요일을 출력하시오.
let d4 = new Date();
d4.setFullYear(d4.getFullYear() + 1);
console.log(`${"월화수목금토일"[d4.getDay()]}요일`);
// 오늘(2월 1일)로 부터 100일 후의 날짜는?
const d5 = new Date();
d5.setDate(d5.getDate() + 100);
console.log(d5);

const d6 = new Date();
const d7 = new Date();
d7.setFullYear(2023);
// function printCalender(date) {
//   let d = new Date(date);
//   d.setDate(1);
//   d.setMonth(d.getMonth() + 1);
//   d.setDate(0);
//   const lastDate = d.getDate();
//   let day = date.getDay();
//   let calender = `\n     ${date.getFullYear().toString().padStart(4, "0")} 년 ${
//     date.getMonth() + 1
//   } 월\n`;
//   calender += " 일 월 화 수 목 금 토\n";
//   for (let i = 0; i < day; i++) {
//     calender += "   ";
//   }
//   for (let i = 1; i <= lastDate; i++) {
//     calender += i.toString().padStart(3, " ");
//     if (++day == 7) {
//       calender += "\n";
//       day = 0;
//     }
//   }
//   calender += "\n";
//   console.log(calender);
// }

function printCalender2(year, month) {
  let date = new Date(0, month - 1);
  date.setFullYear(year);
  dateutils.printCalender(date);
}

dateutils.printCalender(d6);
dateutils.printCalender(d7);
dateutils.printCalender(d4);
printCalender2(1, 4);
printCalender2(1999, 4);
