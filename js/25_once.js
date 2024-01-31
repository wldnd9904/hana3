function once(fn) {
  let didRun = false;
  return function (...args) {
    if (didRun) return;
    didRun = true;
    return fn.apply(this, args);
  };
}
const thisObj1 = { id: 201 };
const thisObj2 = { id: 202 };
function f(x, y) {
  return `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다! - ${this.id}`;
}
const fn = once(f);

console.log(fn.call(thisObj1, 1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn.call(thisObj2, 2, 7)); // undefined
console.log(fn(3, 8)); // undefined

// obj = {
//   id: 1,
//   incrementId() {
//     this.id++;
//     return this;
//   },
//   print() {
//     console.log(this.id);
//     return this;
//   },
// };

// obj.incrementId().print().print().incrementId().print();
