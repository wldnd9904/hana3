interface XUser {
    age: number;
    init(this: XUser): (x: number) => number;
}
declare let u1: XUser;
declare let getAge: (x: number) => number;
declare let age: number;
