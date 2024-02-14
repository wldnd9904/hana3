type Reading = { page: number };
type Writing = { title: string };
type ReadWrite = Reading | Writing;
type ReadWritePrice = (Reading | Writing) & { price: number };
type Novel2 = Writing & { price: number };
class W implements Novel2 {
  title = "TTTT";
  price = 9_000;
}
const x1: ReadWrite = { title: "aaa" }; // Writing
const x2: ReadWrite = { title: "aaa", page: 13 };
const x3: ReadWrite = { page: 1 };
// Reading
x1.title;
// x2.title; // Property 'title' does not exist on type 'ReadWrite'.
// Property 'title' does not exist on type 'Reading'. (2339)
// x2.page; // Property 'page' does not exist on type 'ReadWrite'.
// Property 'page' does not exist on type 'Writing'. (2339)
x3.page;
interface IReading {
  page: number;
}
interface IWriting {
  title: string;
}
// interface IReadWrite Reading | Writing; //
interface IReadWrite extends Reading, Writing {}

// const x: IReadWrite = { title: "aaa" }; // Property 'page' is missing in type '{ title: string; }'
// but required in type 'IReadWrite'.(2741)

interface IndexSignature {
  // [key: number]: string | number;
  [key: string]: string;
}

const is: IndexSignature = {
  0: "hello",
};

type AAAA = [string, number];
type RT1 = [boolean, AAAA]; // [ boolean, [string, number] ]
type RT2 = [boolean, ...AAAA];

let aaaa: AAAA = ["sdf", 123];
let aaaaa = ["sdf", 123];
let bbbb: RT2 = [true, ...aaaa];

interface AA {
  id: number;
  x: () => void;
}

interface BB {
  id: number;
  name: string;
  x: () => string;
}

// OK?
interface CC extends AA, BB {
  addr: string;
  x: () => string;
}

// C에서 x: () => void; 로 하면??

interface MergeA {
  id: number;
}
interface MergeA {
  name: string;
}
const mergeA: MergeA = {
  id: 0,
  name: "",
};
