"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyInfo {
    id;
    name;
    additional;
    constructor(id, name, additional) {
        (this.id = id), (this.name = name);
        this.additional = additional;
    }
}
const me = new MyInfo("1", "lim", {
    sigungu: "Seoul",
    zipcode: "04222",
});
console.log(`I live in ${me.additional.sigungu}`);
let cc;
