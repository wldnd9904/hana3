"use strict";
console.log(typeof f);
console.log(f);
//f = 1;
//NaN = 1;
//Infinity = 0;
console.log(f, NaN, Infinity);
function f(a, a2) {
  console.log("outer f");
}
//delete f; // error
console.log(f);
f();
{
  f(100);
  function f(a) {
    console.log("block f");
  }
}
f(); // strict mode 에서는 outer, sloppy 모드에서는 block
