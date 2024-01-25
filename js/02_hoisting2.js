foo(); // 1
var foo;
function foo() {
  console.log(1);
}
foo();
function foo() {
  console.log(2);
}
foo();
function foo() {
  console.log(3);
}
foo();
function foo() {
  console.log(4);
}
foo();
var foo = function () {
  console.log(5);
};

foo();
