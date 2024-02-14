"use strict";
const choi = { id: 1, name: "Choi" };
const s = 'abc';
let i = 1;
let customer;
console.log(customer = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
});
console.log(customer = {
    name: '홍길동',
    age: 26,
});
//유니온 타입은 freshness가 느슨해짐.
console.log(customer = {
    name: '홍길동',
    age: 26,
    addr: '용산구',
});
console.log(customer = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    age: 26
});
/*
 console.log(customer = {
    name: '홍길동',
    addr: '용산구',
 }
 )*/
let arr = Math.random() > 0.5 ? 1 : [1, 2]; //유니온타입
if (Array.isArray(arr))
    console.log(arr.length); //타입가드 -> 타입내로잉
