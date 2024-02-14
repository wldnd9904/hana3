"use strict";
let u1 = {
    age: 20,
    init() {
        return (x) => this.age + x;
    },
};
let getAge = u1.init();
let age = getAge(5);
console.log("🚀  age:", age);
