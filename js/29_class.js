class Animal {
  constructor(name) {
    this.name = name || super.constructor.name;
  }
  move() {
    console.log("animal moving");
  }
}

const obj = { id: 1, name: "Hong" };
const dog = new Animal("Dog");
console.log(Animal);
console.log(Animal instanceof Function);
console.log(dog.name);
console.log(dog.constructor.name);
console.log(dog.__proto__);
console.log(Animal.prototype);

// console.log("ok=", Object.keys(obj));
// console.log("ak=", Object.keys(dog));
// for (let k in dog) console.log("k=", k);
// console.log("oh=", obj.hasOwnProperty("id"));
// console.log("dh=", dog.hasOwnProperty("id"));
