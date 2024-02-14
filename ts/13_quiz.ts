interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}
type U = keyof User;
type D = keyof Dept;
type UD = U | D;
type UD1 = {
  [i in UD]: any;
};
interface Ud2 {
  // [K: UD]: number | string;
  id: number;
  addr: string;
}

// 다음 코드가 오류가 없으면 통과!
// const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
// const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };

export {};
