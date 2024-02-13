interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type KeyIntersection<T, K> = keyof T & keyof K; // key들의 교집합!
type KeysOfIntersection<T, K> = keyof (T & K); // 두 타입의 &(합친) 타입의 key들!

type Txx = KeyIntersection<IUser, IDept>; // "id" | "age"
type Tyy = KeysOfIntersection<IUser, IDept>; // "id" | "dname" | "age" | "captain" | "name"

type IUID = keyof (IUser & IDept);

export {};
