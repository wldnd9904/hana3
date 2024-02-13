//특정 key의 타입을 변경하는 Change 유틸리티 타입 만들기
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

type Change<T, K extends keyof T, U> = Omit<T, K> & { [_ in K]: U };

type Change2<T, K extends keyof T, U> = {
  [Key in keyof T]: Key extends K ? U : T[Key];
};

type DeptCaptain = Change2<IDept, "captain", IUser>;
type Err = Change2<IDept, "somekey", IUser>; // Error!!!

// 다음 코드가 오류가 나지 않도록 수정하시오.
// 단, itemPrices의 item에는 재고(stock)에 있는 item들만 가능합니다.

type Item = { item: string; price: number };
type ItemPrice<T, U> = {
  [K in keyof T]: K extends "item" ? keyof U : T[K];
};

const stock = { X: 1, Y: 2, Z: 30 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: "X", price: 1000 },
  { item: "Y", price: 2000 },
  { item: "Z", price: 3000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);

export {};
