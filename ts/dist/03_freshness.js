"use strict";
// TUser < TUser2
// const hong: TUser = {id: 1, name: 'Hong', addr: 'Pusan'};  // ?
const lee = { id: 1, name: "Lee", addr: "Seoul" }; // OK
let tmpUser = lee; // ?
let partner = { ...lee, id: 2, name: "Kim" }; // ?
// let partner2: TUser = {...hong, id: 3, addr: 'Daejeon'};  // ?
let friend = { ...lee }; // ?
const xxx = { id: 9, addr: "Sokcho" };
// let friend2: TUser = {...xxx, id: 8};  // ?
