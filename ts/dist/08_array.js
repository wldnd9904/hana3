"use strict";
const onlyA = [
    { name: 'lim', age: 10 },
    { name: 'hong', age: 20 },
];
const onlyB = [
    { name: 'jang', addr: 'Seoul' },
    { name: 'park', addr: 'Busan' },
];
const aOrB = [...onlyA, ...onlyB]; // (A|B)[]
console.log(aOrB);
aOrB.push({
    name: 'Tan',
    age: 30,
    addr: 'Incheon',
});
console.log(aOrB);
const a = [1, 2, 1, 2, "gd"];
