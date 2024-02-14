type User = {
    id: number;
    name: string;
};
declare const choi: User;
declare const s: string;
declare let i: number;
type Member = {
    name: string;
    addr: string;
    discountRate: number;
};
type Guest = {
    name: string;
    age: number;
};
type Customer = Member | Guest;
declare let customer: Customer;
declare let arr: number[] | number;
