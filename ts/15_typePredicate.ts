const isStringNumber = (value: unknown): value is [string, number] => {
  return (
    Array.isArray(value) &&
    typeof value[0] === "string" &&
    typeof value[1] === "number"
  );
};

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};
f1(["df", 2]);

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}

function isDog(a: Animal): a is Dog {
  return "name" in a;
}

const dog: Dog = { name: "gd" };
const cat: Cat = {
  punch: () => {
    console.log("냥냥펀치");
  },
};

console.log(isDog(dog), isDog(cat));

// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];

export {};
