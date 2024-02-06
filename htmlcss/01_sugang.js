document.body.style.display = "flex";
const classes = new Set([
  "Javascript",
  "Javascript 2",
  "Typescript",
  "Typescript 2",
  "React",
  "React 2",
  "Next.js",
  "Next.js 2",
]);
const selectedClasses = new Set();
const classDiv = document.createElement("div");
const classUl = document.createElement("ul");
const classLabel = document.createElement("p");
classLabel.innerText = "수강 가능한 과목";
classDiv.style.padding = "1em";
classDiv.style.margin = "1em";
classDiv.style.border = "1px solid gray";
classDiv.style.width = "200px";
document.body.append(classDiv);
classDiv.appendChild(classLabel);
classDiv.appendChild(classUl);

const selectedClassDiv = document.createElement("div");
const selectedClassUl = document.createElement("ul");
const selectedClassLabel = document.createElement("p");
selectedClassLabel.innerText = "선택된 과목";
selectedClassDiv.style.display = "none";
selectedClassDiv.style.padding = "1em";
selectedClassDiv.style.margin = "1em";
selectedClassDiv.style.border = "1px solid gray";
selectedClassDiv.style.width = "200px";
document.body.append(selectedClassDiv);
selectedClassDiv.appendChild(selectedClassLabel);
selectedClassDiv.appendChild(selectedClassUl);

classes.forEach((item) => {
  const element = document.createElement("li");
  classUl.appendChild(element);
  element.innerText = item;
  element.addEventListener("click", (evt) => {
    console.log(evt.currentTarget);
    console.log(evt.target);
    selectedClasses.add(item);
    selectedClassUl.replaceChildren();
    selectedClasses.forEach((item) => {
      const selectedElement = document.createElement("li");
      selectedElement.innerText = item;
      selectedElement.addEventListener("click", (selectedEvt) => {
        selectedClassUl.removeChild(selectedEvt.currentTarget);
        selectedClasses.delete(item);
        if (selectedClasses.size == 0) selectedClassDiv.style.display = "none";
      });
      selectedClassUl.appendChild(selectedElement);
    });
    if (selectedClasses.size) {
      selectedClassDiv.style.display = "block";
    }
  });
});
