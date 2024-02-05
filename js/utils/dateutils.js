export function getLastDate(date) {
  let d = new Date(date);
  d.setDate(1);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  return d.getDate();
}

export function printCalender(date) {
  const lastDate = getLastDate(date);
  let day = date.getDay();
  let calender = `\n     ${date.getFullYear().toString().padStart(4, "0")} 년 ${
    date.getMonth() + 1
  } 월\n`;
  calender += " 일 월 화 수 목 금 토\n";
  for (let i = 0; i < day; i++) {
    calender += "   ";
  }
  for (let i = 1; i <= lastDate; i++) {
    calender += i.toString().padStart(3, " ");
    if (++day == 7) {
      calender += "\n";
      day = 0;
    }
  }
  calender += "\n";
  console.log(calender);
}
