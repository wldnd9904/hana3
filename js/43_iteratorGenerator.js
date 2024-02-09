class Dog {
  name;
  constructor(name) {
    this.name = name;
  }
}

class ItDog2 extends Dog {
  *[Symbol.iterator]() {
    const names = this.name.split(/,\s?/);
    for (let i = 0; i < names.length; i++) {
      yield names[i];
    }
  }
}

const idog2 = new ItDog2("Toby, Max, Sam");
for (const d of idog2) console.log(d);

console.log([...idog2]); // 4회 반복

function* add() {
  const a = yield "첫 번째 수?";
  const b = yield "두 번째 수?";
  return a + b;
}

const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log("result=", itAdd.next(2).value);
