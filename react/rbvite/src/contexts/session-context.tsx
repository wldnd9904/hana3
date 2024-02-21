import { createContext, PropsWithChildren, useState, useContext } from "react";
import { Session, Cart } from "../type";

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string, address: string, age: number) => void;
  logout: () => void;
  removeItem: (id: number) => void;
  changeItem: (newItem: Cart) => void;
  addItem: (item: { id: number | null; name: string; price: number }) => void;
};

const SampleSession = {
  loginUser: { id: 1, name: "Hong", address: "서울", age: 20 },
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};

const SessionContext = createContext<SessionContextProp>({
  session: SampleSession,
  login: () => {},
  logout: () => {},
  removeItem: () => {},
  changeItem: () => {},
  addItem: () => {},
});

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);
  const login = (id: number, name: string, address: string, age: number) => {
    if (name.trim().length == 0) return;
    else
      setSession((s) => ({
        loginUser: { id, name, address, age },
        cart: s.cart,
      }));
  };
  const logout = () => {
    setSession((s) => ({ loginUser: null, cart: s.cart }));
  };
  const removeItem = (id: number) => {
    setSession((s) => ({
      ...s,
      cart: s.cart.filter((item) => item.id != id),
    }));
  };
  const changeItem = (newItem: Cart) => {
    setSession((s) => ({
      ...s,
      cart: s.cart.map((item) => (item.id == newItem.id ? newItem : item)),
    }));
  };
  const addItem = (item: {
    id: number | null;
    name: string;
    price: number;
  }) => {
    if (!item.id)
      item.id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
    setSession((s) => ({
      ...s,
      cart: [...s.cart, { ...item, id: item.id! }],
    }));
  };

  return (
    <SessionContext.Provider
      value={{ session, login, logout, removeItem, changeItem, addItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
