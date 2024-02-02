Array.prototype.first = function () {
  return this[0];
};

Object.defineProperties(Array.prototype, {
  first: {
    get: function () {
      return this[0];
    },
  },
  last: {
    get: function () {
      return this[this.length - 1];
    },
  },
});
Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map((item) => item[prop]))];
};
Array.prototype.filterBy = function (prop, value) {
  return this.filter((item) => item[prop] === value);
};
Array.prototype.sortBy = function (prop, direction = "asc") {
  return this.sort(
    (a, b) =>
      (a[prop] > b[prop] ? 1 : -1) *
      (direction.toLowerCase() == "desc" ? -1 : 1)
  );
};
Array.prototype.findBy = function (prop, value) {
  return this.find((item) => item[prop] === value);
};
const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];
const uniqDepts = users.uniqBy("dept");
console.log(users.uniqBy("dept")); // [ 'HR', 'Server', 'Front', 'Sales' ]
console.log(users.findBy("name", "Choi"));
console.log(users.filterBy("dept", "HR"));
console.log("--");
console.log("id ac:", users.sortBy("id", "ac"));
console.log("id asc:", users.sortBy("id", "asc"));
console.log("id desc:", users.sortBy("id", "desc"));
console.log("name desc:", users.sortBy("name", "desc"));
console.log("name asc:", users.sortBy("name", "asc"));
console.log("dept asc:", users.sortBy("dept", "asc"));
console.log("dept desc:", users.sortBy("dept", "DESC"));

// console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
// console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }
// console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }

// console.log(empDept.get(kim).dname); // '개발팀'
// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
