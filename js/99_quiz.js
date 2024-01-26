console.log("-------");

for (let i = 0.1; i < 1; i += 0.1) console.log(Math.round(i * 10) / 10);
for (let i = 0.1; i < 1; i += 0.1) console.log(+i.toFixed(1));

console.log("-------");

function addPoints(a, b) {
  let pow = 10 ** (Math.max(String(b).length, String(a).length) - 2);
  let ret = Math.round((a + b) * pow) / pow;

  console.log(a, " + ", b, " = ", ret);
  return ret;
}

function addPoints2(a, b) {
  let pow = Math.max(String(b).length, String(a).length) - 2;
  let ret = +(a + b).toFixed(pow);

  console.log(a, " + ", b, " = ", ret);
  return ret;
}

addPoints2(0.21354, 0.1);
addPoints2(0.14, 0.28);
addPoints2(0.34, 0.226);

console.log("-------");

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { passwd, ...userInfo } = user;
console.log(userInfo);
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

console.log("-------");

//다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);

// 출력결과: 1 2 3
console.log("-------");
