"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isStringNumber = (value) => {
    return (Array.isArray(value) &&
        typeof value[0] === "string" &&
        typeof value[1] === "number");
};
const f1 = (value) => {
    if (isStringNumber(value)) {
        console.log(value[0].toUpperCase(), value[1].toFixed());
    }
};
f1(["df", 2]);
function isDog(a) {
    return "name" in a;
}
const dog = { name: "gd" };
const cat = {
    punch: () => {
        console.log("냥냥펀치");
    },
};
console.log(isDog(dog), isDog(cat));
// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.
const cart = {
    X: 1,
    Y: 2,
    Z: 3,
};
// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.
const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
};
