console.log("DOM.js");

const div = document.createElement("div");
div.innerText = "innerText";
div.style.backgroundColor = "lightgray";

const div2 = document.createElement("div");
div2.innerText = "innerinnerText";
div2.style.backgroundColor = "gray";

const span = document.createElement("span");
div.append(span);
div.append(div2);
span.innerHTML = "<br>Span: <strong>strong</strong>";

document.body.append(div);

const toUpper = (ele) => {
  ele.innerText = ele.innerText.toUpperCase();
};

const btn = document.createElement("button");
btn.style.margin = "1em";
btn.textContent = "BTS";
div2.append(btn);

div.addEventListener(
  "click",
  (evt) => {
    console.log("div1");
  },
  { capture: true }
);
div2.addEventListener(
  "click",
  (evt) => {
    console.log("div2");
    evt.stopPropagation();
  },
  { once: true }
);

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

const sbm = (evt) => {
  console.log("sbmit");
  console.log(evt.currentTarget);
  evt.preventDefault();
};

sm.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("Gd");
});
