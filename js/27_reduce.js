const obj1 = { id: 1 };
const obj2 = { name: "Hong" };
const obj3 = { id: 5, addr: "Seoul" };
const objArr = [obj1, obj2, obj3];
const reduced = objArr.reduce((prev, cur) => Object.assign(prev, cur), {});
const reduced2 = objArr.reduce((prev, cur) => ({ ...prev, ...cur }), {});
console.log(reduced);
console.log(reduced2);
