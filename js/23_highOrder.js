const f1 = (fn, x) => fn(x);
f1(console.log, "abc");

function fx1(a) {
  return a ** 2;
}

console.log(f1(fx1, 2));

const f2 = function (f) {
  return function (...args) {
    return f(...args);
  };
};
const f3 =
  (f) =>
  (...args) =>
    f(...args);

console.log(f2(Math.max)(1, 2, 3, 4, 5));
