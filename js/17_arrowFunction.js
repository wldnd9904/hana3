function f(a) {
  return a ** 2;
}

const af = (a) => a ** 2;

console.log(f(2), af(2));

function f2(a, b) {
  const c = a ** b;
  return Math.sqrt(c);
}

const af2 = (a, b) => {
  const c = a ** b;
  return Math.sqrt(c);
};

console.log(f2(2, 2), af2(2, 3));
let y = 10;
function fn() {
  console.log(this.y); // globalThis.y 접근
}
fn();
fn.bind({ y: 999 })();

const obj = {
  namae: "jiung",
  hi() {
    console.log("hi", this.namae);
  },
};
obj.hi();
const obj2 = {
  namae: "jiung",
  hi: () => {
    console.log("hi", this.namae);
  },
};
obj2.hi();
const obj3 = {
  namae: "jiung",
  hi: function fn() {
    console.log("hi", this.namae);
  },
};
obj3.hi();
