type TUser = {
  id: number;
  name: string;
};
type TUser2 = {
  id: number;
  name: string;
  addr?: string;
};
// TUser < TUser2
// const hong: TUser = {id: 1, name: 'Hong', addr: 'Pusan'};  // ?
const lee: TUser2 = { id: 1, name: "Lee", addr: "Seoul" }; // OK

let tmpUser: TUser = lee; // ?
let partner: TUser = { ...lee, id: 2, name: "Kim" }; // ?
// let partner2: TUser = {...hong, id: 3, addr: 'Daejeon'};  // ?
let friend: TUser = { ...lee }; // ?
const xxx = { id: 9, addr: "Sokcho" };
// let friend2: TUser = {...xxx, id: 8};  // ?
