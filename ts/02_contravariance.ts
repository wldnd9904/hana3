// strictFunctionTypes = true  (false라면 bivariance)
function f(cb: (input: string | number) => number) {
  return cb(1);
}
function f2(input: string | number | boolean) {
  return 1;
}
function f3(input: string | number) {
  return 1;
}
function f4(input: string) {
  return 1;
}

f(f2); // OK
f(f3); // OK
// f(f4); // strictFunctionTypes가 false라면 OK, 아니면 Fail!
