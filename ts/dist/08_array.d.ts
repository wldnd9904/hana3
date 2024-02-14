type A = {
    name: string;
    age: number;
};
type B = {
    name: string;
    addr: string;
};
declare const onlyA: A[];
declare const onlyB: B[];
declare const aOrB: (A | B)[];
type tup = [number, number, ...any[]];
declare const a: tup;
