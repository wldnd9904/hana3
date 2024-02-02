const arr = ["1", "2", "3"];
const rets = arr.map(parseInt);
arr.map((...args) => {
  console.log(...args);
});
console.log(parseInt("1", 0, ["1", "2", "3"]));
console.log(parseInt("2", 1, ["1", "2", "3"]));
console.log(parseInt("3", 2, ["1", "2", "3"]));
console.log(rets); // [ 1, NaN, NaN ]

const unary = (fn) => (arg) => fn(arg);

const rets2 = arr.map(unary(parseInt));
console.log(rets2); // [ 1, 2, 3 ]
Array.prototype.unaryMap = function (f) {
  const result = [];
  for (let i = 0; i < this.length; i += 1) {
    result.push(f(this[i][0]));
  }
  return result;
};

const rets3 = arr.unaryMap(parseInt);
console.log(rets3); // [ 1, 2, 3 ]
