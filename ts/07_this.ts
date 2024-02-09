interface XUser {
  age: number;
  init(this: XUser): (x: number) => number;
}

let u1: XUser = {
  age: 20,
  init(this: XUser) {
    return (x: number) => this.age + x;
  },
};

let getAge = u1.init();
let age = getAge(5);
console.log("🚀  age:", age);
