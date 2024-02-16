type User = { id: number; name: string; age: number };
type OmitedAgeUser = Omit<User, "age">;
type OmitedIdAgeUser = Omit<User, "id" | "age">;

// ex1) 다음 UserProfile 타입을 type 또는 interface로 정의하시오.
type UserProfile = Omit<User, "age"> & { addr: string };
interface IUserProfile extends Omit<User, "age"> {
  addr: string;
}
let iUser: IUserProfile = { id: 1, name: "Hong", addr: "Seoul" };

type PickIdName = Pick<User, "id" | "name">;

type R = Record<string, number>;

// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

type FullUser = {
  [k in keyof (typeof users)[number]]: (typeof users)[number][k];
};
type FullUser2 = Partial<Record<keyof typeof users[number], string|number>>

const ret: FullUser = users.reduce((cur, next) => {
  return Object.assign(cur, next);
}, {});
console.log(ret);

export {};
