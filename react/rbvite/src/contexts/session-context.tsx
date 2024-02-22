import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
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
  cart: [],
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
  const login = useCallback(
    (id: number, name: string, address: string, age: number) => {
      if (name.trim().length == 0) return;
      else
        setSession((s) => ({
          loginUser: { id, name, address, age },
          cart: s.cart,
        }));
    },
    []
  );
  const logout = useCallback(() => {
    setSession((s) => ({ loginUser: null, cart: s.cart }));
  }, []);
  const removeItem = useCallback((id: number) => {
    setSession((s) => ({
      ...s,
      cart: s.cart.filter((item) => item.id != id),
    }));
  }, []);
  const changeItem = useCallback((newItem: Cart) => {
    setSession((s) => ({
      ...s,
      cart: s.cart.map((item) => (item.id == newItem.id ? newItem : item)),
    }));
  }, []);
  const addItem = useCallback(
    (item: { id: number | null; name: string; price: number }) => {
      if (!item.id)
        item.id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      setSession((s) => ({
        ...s,
        cart: [...s.cart, { ...item, id: item.id! }],
      }));
    },
    []
  );
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    console.log("fetch");
    fetch("/sample.json", { signal })
      .then((res) => res.json())
      .then(setSession)
      .catch(console.log);
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <SessionContext.Provider
      value={{ session, login, logout, removeItem, changeItem, addItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
