type Reading = {
    page: number;
};
type Writing = {
    title: string;
};
type ReadWrite = Reading | Writing;
type ReadWritePrice = (Reading | Writing) & {
    price: number;
};
type Novel2 = Writing & {
    price: number;
};
declare class W implements Novel2 {
    title: string;
    price: number;
}
declare const x1: ReadWrite;
declare const x2: ReadWrite;
declare const x3: ReadWrite;
interface IReading {
    page: number;
}
interface IWriting {
    title: string;
}
interface IReadWrite extends Reading, Writing {
}
interface IndexSignature {
    [key: string]: string;
}
declare const is: IndexSignature;
type AAAA = [string, number];
type RT1 = [boolean, AAAA];
type RT2 = [boolean, ...AAAA];
declare let aaaa: AAAA;
declare let aaaaa: (string | number)[];
declare let bbbb: RT2;
interface AA {
    id: number;
    x: () => void;
}
interface BB {
    id: number;
    name: string;
    x: () => string;
}
interface CC extends AA, BB {
    addr: string;
    x: () => string;
}
interface MergeA {
    id: number;
}
interface MergeA {
    name: string;
}
declare const mergeA: MergeA;
