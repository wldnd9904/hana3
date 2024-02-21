export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

export type LoginUser = {
  id: number;
  name: string;
  address: string;
  age: number;
};
export type Cart = { id: number; name: string; price: number };
