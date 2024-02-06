const users = [
  { id: 1, name: "홍길동", tel: "01088889991", addr: "서울" },
  { id: 2, name: "김길동", tel: "01088889992", addr: "부산" },
  { id: 3, name: "이길동", tel: "01088889993", addr: "서울" },
  { id: 4, name: "박길동", tel: "01088889994", addr: "서울" },
  { id: 9, name: "김빈칸", tel: "01000000000", addr: "서울" },
];

const table = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
document.body.appendChild(table);

const thr = document.createElement("tr");
for (const [key, value] of [...Object.entries(users[0]), ["삭제", ""]]) {
  const th = document.createElement("th");
  th.style.border = "1px solid black";
  th.textContent = key;
  thr.appendChild(th);
}
table.innerHTML = "<caption>Table</caption>";
table.appendChild(thr);
users.forEach((item, key) => {
  item.tel = item.tel.replace(/(\d{3})(\d{4})(\d{4})/, `$1-$2-$3`);
  const tr = document.createElement("tr");
  console.log(item);
  for (const [key, value] of [...Object.entries(item), ["삭제", ""]]) {
    const td = document.createElement("td");
    td.style.border = "1px solid black";
    td.style.padding = "0.5em";
    td.textContent = item[key];
    tr.appendChild(td);
    if (key == "삭제") {
      const btn = document.createElement("button");
      td.appendChild(btn);
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
      btn.style.border = "none";
      btn.style.borderRadius = "5px";
      btn.textContent = "삭제";
      btn.addEventListener("click", () => {
        table.removeChild(tr);
      });
    }
  }
  if (item.name == "김빈칸") tr.style.visibility = "hidden";
  table.appendChild(tr);
});

const table2 = document.createElement("table");
table2.style.border = "1px solid black";
table2.style.borderCollapse = "collapse";
document.body.appendChild(table2);

const thr2 = document.createElement("tr");
for (const [key, value] of [...Object.entries(users[0]), ["삭제", ""]]) {
  const th = document.createElement("th");
  th.style.border = "1px solid black";
  th.textContent = key;
  thr2.appendChild(th);
}
table2.innerHTML = "<caption>Table</caption>";
table2.appendChild(thr2);
users.forEach((item, key) => {
  item.tel = item.tel.replace(/(\d{3})(\d{4})(\d{4})/, `$1-$2-$3`);
  const tr = table2.insertRow();
  console.log(item);
  for (const [key, value] of [...Object.entries(item), ["삭제", ""]]) {
    const td = tr.insertCell();
    td.style.border = "1px solid black";
    td.style.padding = "0.5em";
    td.textContent = item[key];
    if (key == "삭제") {
      const btn = document.createElement("button");
      td.appendChild(btn);
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
      btn.style.border = "none";
      btn.style.borderRadius = "5px";
      btn.textContent = "삭제";
      btn.addEventListener("click", (e) => {
        tr.remove();
      });
    }
  }
  if (item.name == "김빈칸") tr.style.visibility = "hidden";
});
