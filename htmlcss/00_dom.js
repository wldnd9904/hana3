console.log("DOM.js");

const div = document.createElement("div");
div.innerText = "innerText";
div.style.backgroundColor = "lightgray";

const span = document.createElement("span");
div.append(span);
span.innerHTML = "<br>Span: <strong>strong</strong>";

document.body.append(div);

const toUpper = (ele) => {
  ele.innerText = ele.innerText.toUpperCase();
};

const btn = document.createElement("button");
btn.style.margin = "1em";
btn.textContent = "BTS";
div.append(btn);
btn.addEventListener("click", (evt) => {
  alert("BTS clicked.");
  const bbb = document.getElementById("li2");
  bbb.innerText = "BTS";
  const ul = document.querySelector(".bg-yellow");
  const aaa = ul.firstElementChild;
  toUpper(aaa);
  const ccc = ul.lastElementChild;
  toUpper(ccc);
});

console.log(div.textContent);
console.log(div.innerText);
console.log(div.innerHTML);
