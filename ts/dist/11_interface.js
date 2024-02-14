"use strict";
class W {
    title = "TTTT";
    price = 9_000;
}
const x1 = { title: "aaa" }; // Writing
const x2 = { title: "aaa", page: 13 };
const x3 = { page: 1 };
// Reading
x1.title;
// x2.title; // Property 'title' does not exist on type 'ReadWrite'.
// Property 'title' does not exist on type 'Reading'. (2339)
// x2.page; // Property 'page' does not exist on type 'ReadWrite'.
// Property 'page' does not exist on type 'Writing'. (2339)
x3.page;
const is = {
    0: "hello",
};
let aaaa = ["sdf", 123];
let aaaaa = ["sdf", 123];
let bbbb = [true, ...aaaa];
const mergeA = {
    id: 0,
    name: "",
};
