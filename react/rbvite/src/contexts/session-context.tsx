import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import { Session, Cart, LoginUser } from "../type";
import { useFetch } from "../hooks/fetch";

type SessionContextProp = {
  session: Session;
  login: (loginUser: LoginUser) => void;
  logout: () => void;
  removeItem: (id: number) => void;
  changeItem: (newItem: Cart) => void;
  addItem: (item: Omit<Cart, "id"> & Partial<Cart>) => void;
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

type Action =
  | { type: "login" | "logout"; payload: LoginUser | null }
  | { type: "removeItem"; payload: number }
  | { type: "addItem"; payload: Omit<Cart, "id"> & Partial<Cart> }
  | { type: "changeItem"; payload: Cart }
  | { type: "set"; payload: Session };

const reducer = (s: Session, { type, payload }: Action): Session => {
  switch (type) {
    case "login":
    case "logout":
      return { ...s, loginUser: payload };
    case "addItem":
      const newItem = { ...payload };
      if (newItem.id)
        newItem.id = Math.max(...s.cart.map((item) => item.id), 0) + 1;
      return { ...s, cart: [...s.cart, newItem as Cart] };
    case "removeItem":
      return { ...s, cart: s.cart.filter((item) => item.id != payload) };
    case "changeItem":
      const newCart = s.cart.map((it) => (it.id == payload.id ? payload : it));
      return { ...s, cart: newCart };
    case "set":
      return payload;
  }
};
export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(reducer, SampleSession);
  const totalPrice = useMemo(
    () => session.cart.reduce((sum, item) => sum + item.price, 0),
    [session.cart]
  );

  const login = useCallback((loginUser: LoginUser) => {
    dispatch({ type: "login", payload: loginUser });
  }, []);
  const logout = useCallback(() => {
    dispatch({ type: "logout", payload: null });
  }, []);
  const removeItem = useCallback((id: number) => {
    dispatch({ type: "removeItem", payload: id });
  }, []);
  const changeItem = useCallback((newItem: Cart) => {
    dispatch({ type: "changeItem", payload: newItem });
  }, []);
  const addItem = useCallback((item: Omit<Cart, "id"> & Partial<Cart>) => {
    dispatch({ type: "addItem", payload: item });
  }, []);

  const { data } = useFetch<Session>("/sample.json");
  useEffect(() => {
    if (data) dispatch({ type: "set", payload: data });
  }, [data]);

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
