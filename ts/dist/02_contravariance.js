"use strict";
// strictFunctionTypes = true  (false라면 bivariance)
function f(cb) {
    return cb(1);
}
function f2(input) {
    return 1;
}
function f3(input) {
    return 1;
}
function f4(input) {
    return 1;
}
f(f2); // OK
f(f3); // OK
// f(f4); // strictFunctionTypes가 false라면 OK, 아니면 Fail!
