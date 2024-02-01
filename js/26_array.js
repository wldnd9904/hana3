// const arr = [7, 8, 9];
// console.log("arr:", { ...arr });
// console.log("arr's entries:", arr.entries());
// arr.length = 5;
// console.log("arr:", arr);
obj = {};
fn = () => {};
const a = Array(3); // ⇔ new Array(3) ⇔ [,,,]
const ar = [1, [7, 8], obj, [obj], fn];
const arr = [1, 2, 3];
// const arr = Array(1, 2, 3); // Array(...args)
// const arr = new Array(1, 2, 3);
const ar2 = Array(5).fill(1);
console.log(ar2);
ar2.fill("X");
console.log(ar2);
ar2.fill("Y", 1);
console.log(ar2); // from index 1
ar2.fill("Z", 2, 4); // [2,4)
console.log(ar2);
ar2.fill(0, -4, -1); // 5-1이상 ~ 5-1미만
console.log(ar2);

const ar3 = Array.from(arr); // no-ref
console.log(ar3);
const ar4 = Array.from([...arr, 4, 5]);
console.log(ar4);
console.log(Array.from({ length: 5 }, (_, i) => i + 1));

Array.from(Array(5), (_, i) => i + 1);
Array.from(Array(5).keys()); // 0, 1, …
console.log(Array.from("gd"));

const aa = [1, 2, 3];
console.log(aa.join(", "));
aa[10] = 10; // [1, 2, 3, empty x 7, 10]
// length = 11
aa["1"] = 22; // 숫자형 문자열도 허용!
// [1, 22, 3, empty x 7, 10]
delete aa[2]; // [1, 22, empty x 8, 10]
aa["a"] = "AAA"; // index가 이니라 property
aa.b = "BBB"; // property 동적 추가
aa[2.3] = 23;
aa[-1] = -1;
console.log(aa.length); // ?
console.log(aa[1], aa.a, aa[-1]); // ?

const a22 = [2, 22];
console.log(Array.isArray(a22));
function myConcat(...args) {
  return [...a22, ...(Array.isArray(args[0]) ? args[0] : args)];
}

const a22_1 = myConcat(3, 33);
console.log("🚀  a22_1:", a22_1);
const a22_2 = myConcat([3, 33]);
console.log("🚀  a22_2:", a22_2);

const a6 = ["Kim", "Lee", "Hong", "Choi"];
console.log("a6:", a6);
console.log("sorted a6:", a6.sort());

const users = [
  { id: 1, name: "Kim" },
  { id: 3, name: "Lee" },
  { id: 4, name: "Hong" },
  { id: 2, name: "Choi" },
];
console.log(users.sort((a, b) => a.id - b.id));

console.log(users.slice(2, 2));
console.log(users);

const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
console.log(arr2.slice(1, 3));
// ex2) [3]부터 모두 다 추출
console.log(arr2.slice(2));
// ex3) [2,3,4] 제거하기
arr2.splice(1, 3);
console.log(arr2);
// ex4) 복원하기
arr2.splice(1, 0, 2, 3, 4);
console.log(arr2);
// ex5) [3] 부터 끝까지 제거하기
arr2.splice(2);
console.log(arr2);
// ex6) 복원하기
arr2.splice(2, 0, 3, 4, 5);
console.log(arr2);
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
arr2.splice(2, 1, "X", "Y", "Z");
console.log(arr2);
// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
arr2.splice(2, 3, 3); //복원
console.log([...arr2.slice(0, 2), "X", "Y", "Z", ...arr2.slice(-2)]);
console.log(arr2.toSpliced(2, 1, "X", "Y", "Z"));
console.log(
  arr2.reduce((org, item) => {
    if (item == 3) org.push("X", "Y", "Z");
    else org.push(item);
    return org;
  }, [])
);

const flat = [1, 4, 9].flatMap((a) => [[[a ** 2]], Math.sqrt(a)]);
console.log(flat);
