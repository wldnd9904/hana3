console.log("----------------------------");
const arr = [100, 200, 300, 400, 500, 600, 700];
// 1.for-in문을 사용하여 배열의 인덱스를 출력하시오.
{
  let ret = [];
  for (idx in arr) ret.push(idx);
  console.log(ret.toString());
}
// 2.for-in문을 사용하여 배열의 원소를 출력하시오.
{
  let ret = [];
  for (idx in arr) ret.push(arr[idx]);
  console.log(ret.toString());
}
const obj = { name: "lim", addr: "Yongsan", level: 1, role: 9, receive: false };
// 3. for-in문을 사용하여 프로퍼티 이름을 출력하시오.
{
  let ret = [];
  for (key in obj) ret.push(key);
  console.log(ret.toString());
}
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
{
  let ret = [];
  for (key in obj) ret.push(obj[key]);
  console.log(ret.toString());
}
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
{
  let ret = [];
  for (key of Object.keys(obj)) ret.push(obj[key]);
  console.log(ret.toString());
}
// 6. level 프로퍼티가 열거되지 않도록 설정하시오. // Object.defineProperty
Object.defineProperty(obj, "level", { enumerable: false });
{
  let ret = [];
  for (key in obj) ret.push(key);
  console.log(ret.toString());
}
// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty <- freeze
Object.defineProperty(obj, "role", { writable: false });
obj.role = 10;
console.log("role after trying changing:", obj.role);

console.log("----------------------------");

// [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오.
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
let fromArr = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
  let toObj = {};
  for (const [key, ...value] of arr) {
    toObj[key] = value;
  }
  return toObj;
}
//   arr.forEach((nestedArr) => {
//     toObj[nestedArr[0]] = nestedArr.slice(1);
//   });
console.log(makeObjectFromArray(fromArr));
// 위에서 만든 객체를 다시 배열로 만드시오.
// { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
// => [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
let fromObj = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };
function makeArrayfromObject(obj) {
  return Reflect.ownKeys(obj).map((key) => [key, ...obj[key]]);
}
console.log(makeArrayfromObject(fromObj));
console.log("----------------------------");
// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 / spread(...) 연산자를 사용하지 말고 작성하시오.
const kim = { nid: 3, nm: "Hong", addr: "Pusan" };
const newKim = copyObject2(kim);
newKim.addr = "Daegu";
console.log(kim.addr !== newKim.addr); // true면 통과!

function copyObject(obj) {
  const newObj = {};
  for (const k in obj) newObj[k] = obj[k];
  return newObj;
}
function copyObject2(obj) {
  const newObj = {};
  Object.assign(newObj, obj);
  return newObj;
}

console.log("----------------------------");
