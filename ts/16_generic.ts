type Address = { sigungu: string; zipcode: string };

interface Info<T, ID = number> {
  id: ID;
  name: string;
  additional: T;
}

class MyInfo<T, ID = number> implements Info<T, ID> {
  id: ID;
  name: string;
  additional: T;

  constructor(id: ID, name: string, additional: T) {
    (this.id = id), (this.name = name);
    this.additional = additional;
  }
}

const me = new MyInfo<Address, string>("1", "lim", {
  sigungu: "Seoul",
  zipcode: "04222",
});
console.log(`I live in ${me.additional.sigungu}`);

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type BN<T, U> = T extends keyof U ? boolean : number;
type IdBN1 = BN<"id", IDept>; // boolean
type IdBN2 = BN<"idd", IDept>; // number
type CC<T, U> = T extends U ? T : never;
let cc: CC<keyof IDept, "id" | "captain">;

type O<T> = Omit<T, "id" | "age">;
type Odept = O<IDept>; // ?

// type P<T> = Pick<T, "id" | "age">;
// type Pdept = P<IDept>; // ?

export {};
type X<T> = {
  [x in keyof T]: T[x];
};
type XDept = X<IDept>;
type Z<T, K extends keyof T> = {
  [x in K]: T[x];
};

type ZDept = Z<IDept, "id" | "age">;

type AMPERSAND = ("id" | "name") & "id";
