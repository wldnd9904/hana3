import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import { Session, Cart } from "../type";

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string, address: string, age: number) => void;
  logout: () => void;
  removeItem: (id: number) => void;
  changeItem: (newItem: Cart) => void;
  addItem: (item: { id: number | null; name: string; price: number }) => void;
  totalPrice: number;
};

const SampleSession: Session = {
  loginUser: { id: 1, name: "Hong", address: "서울", age: 20 },
  cart: [],
};

const SessionContext = createContext<SessionContextProp>({
  session: SampleSession,
  login: () => {},
  logout: () => {},
  removeItem: () => {},
  changeItem: () => {},
  addItem: () => {},
  totalPrice: 0,
});

type SessionActionType =
  | "login"
  | "logout"
  | "removeItem"
  | "changeItem"
  | "addItem"
  | "setItem";

type SessionPayloadType = {
  id?: number;
  name?: string;
  address?: string;
  age?: number;
  price?: number;
  cart?: Cart[];
};

type Action = { type: SessionActionType; payload: SessionPayloadType };

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(
    (s: Session, { type, payload }: Action): Session => {
      switch (type) {
        case "login":
          return {
            ...s,
            loginUser: {
              id: payload.id!,
              name: payload.name!,
              address: payload.address!,
              age: payload.age!,
            },
          };
        case "logout":
          return { ...s, loginUser: null };
        case "addItem":
          return {
            ...s,
            cart: [
              ...s.cart,
              { id: payload.id!, name: payload.name!, price: payload.price! },
            ],
          };
        case "removeItem":
          return {
            ...s,
            cart: s.cart.filter((item) => item.id != payload.id!),
          };
        case "changeItem":
          return {
            ...s,
            cart: s.cart.map((item) =>
              item.id == payload.id!
                ? {
                    id: payload.id!,
                    name: payload.name!,
                    price: payload.price!,
                  }
                : item
            ),
          };
        case "setItem":
          return { ...s, cart: payload.cart! };
        default:
          return s;
      }
    },
    SampleSession
  );

  const totalPrice = useMemo(
    () => session.cart.reduce((sum, item) => sum + item.price, 0),
    [session.cart]
  );

  const login = useCallback(
    (id: number, name: string, address: string, age: number) => {
      if (name.trim().length == 0) return;
      dispatch({ type: "login", payload: { id, name, address, age } });
    },
    []
  );
  const logout = useCallback(() => {
    dispatch({ type: "logout", payload: {} });
  }, []);
  const removeItem = useCallback((id: number) => {
    dispatch({ type: "removeItem", payload: { id: id } });
  }, []);
  const changeItem = useCallback((newItem: Cart) => {
    dispatch({ type: "changeItem", payload: { ...newItem } });
  }, []);
  const addItem = useCallback(
    (item: { id: number | null; name: string; price: number }) => {
      if (!item.id)
        item.id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      dispatch({
        type: "addItem",
        payload: { id: item.id!, name: item.name, price: item.price },
      });
    },
    []
  );
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    console.log("fetch");
    fetch("/sample.json", { signal })
      .then((res) => res.json())
      .then((session) => {
        dispatch({ type: "setItem", payload: { ...session } });
      })
      .catch(console.log);
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        removeItem,
        changeItem,
        addItem,
        totalPrice,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
