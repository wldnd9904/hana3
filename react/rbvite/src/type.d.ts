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

export type Position = {
  x: number;
  y: number;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body?: string;
  content?: string;
};
