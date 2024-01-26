/*const u = { a: 1, b: 2, c: 3 };
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let didEnd = false;
for (; !didEnd; ) {
  didEnd = true;
}

for (let prop in u) console.log(u[prop]);

for (let a of arr) console.log(a);
*/
for (let i = 0.1; i < 1; i += 0.1) console.log(i.toFixed(1));

console.log("---");

for (let i = 0.1; i < 1; i += 0.1) console.log(Math.round(i * 10) / 10);

console.log("---");

for (let i = 1; i <= 10; i += 1) console.log(i / 10);

console.log("---");
i = 10;
while (i--) {
  console.log(i);
}
