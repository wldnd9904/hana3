console.log("----------------------------------------");
{
  //아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
  const hong = { id: 1, name: "Hong" };
  const choi = { id: 5, name: "Choi" };
  const kim = { id: 2, name: "kim" };
  const lee = { id: 3, name: "Lee" };
  const park = { id: 4, name: "Park" };
  const users = [kim, lee, park]; // 오염되면 안됨!!

  console.log(addUser(hong)); // [kim, lee, park, hong]
  console.log(removeUser(lee)); // [kim, park]
  console.log(changeUser(kim, choi)); // [choi, lee, park]

  function addUser(obj) {
    return [...users, obj];
  }
  function removeUser(obj) {
    return users.filter((item) => item !== obj);
  }
  function changeUser(from, to) {
    return users.map((item) => (item === from ? to : item));
  }
}
console.log("----------------------------------------");
{
  //ex1) 배열의 각 원소를 String으로 변환하시오.
  const assert = require("assert");
  const arr = [1, 2, 3, true];
  const ret1 = arr.map((item) => `${item}`);
  console.log(ret1);
  assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

  //ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
  const classNames = (...args) =>
    args
      .flatMap((item) => item.split(" "))
      .filter((item) => item != "")
      .join(" ");
  const ret2 = classNames("", "a b c", "d", "", "e");
  console.log(ret2);
  assert.strictEqual(ret2, "a b c d e");
  // 주의: ' a b c d  e'면 안됨!!
}
console.log("----------------------------------------");
{
  //다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
  // → 배열의 각 요소를 제곱   n => n ** 2            [square]
  // → 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
  // → 배열의 각 요소를 세제곱  n => n ** 3            [cube]
  const arr = [1, 2, 3, 4, 5];
  const square = (n) => n ** 2;
  const sqrt = (n) => Math.sqrt(n);
  const cube = (n) => n ** 3;
  const ret = [square, sqrt, cube].reduce(
    (arr, fn) => arr.map((item) => fn(item)),
    arr
  );
  const ret2 = [cube, square, sqrt].reduce(
    (arr, fn) => arr.map((item) => fn(item)),
    arr
  );

  console.log(ret);
  console.log(ret2);
  //cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
  // ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]
  //  TryThis. 수행 순서를 자유롭게 변경하도록 해보세요.
  // [square, sqrt, cube].reduce
  // [cube, square, sqrt]
}
console.log("----------------------------------------");
