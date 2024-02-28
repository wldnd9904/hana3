import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { useCallback, useMemo, useReducer } from "react";
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
const SKEY = "session";
const DefaultSession = { loginUser: null, cart: [] };
const SessionContext = createContext<SessionContextProp>({
  session: DefaultSession,
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
  let newer: Session;
  switch (type) {
    case "login":
    case "logout":
      newer = { ...s, loginUser: payload };
      break;
    case "addItem":
      const newItem = { ...payload };
      if (!newItem.id)
        newItem.id = Math.max(...s.cart.map((item) => item.id), 0) + 1;
      newer = {
        ...s,
        cart: [...s.cart, newItem as Cart].sort((a, b) => a.id - b.id),
      };
      break;
    case "removeItem":
      newer = { ...s, cart: s.cart.filter((item) => item.id != payload) };
      break;
    case "changeItem":
      const newCart = s.cart.map((it) => (it.id == payload.id ? payload : it));
      newer = { ...s, cart: newCart };
      break;
    case "set":
      newer = payload;
      break;
  }
  setStorage(newer);
  return newer;
};

function getStorage(): Session {
  const storedData = localStorage.getItem(SKEY);
  if (storedData) return JSON.parse(storedData) as Session;
  return DefaultSession;
}
function setStorage(session: Session) {
  localStorage.setItem(SKEY, JSON.stringify(session));
}

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, dispatch] = useReducer(
    reducer,
    getStorage() ?? DefaultSession
  );
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

  // const { data } = useFetch<Session>("/sample.json");
  // useEffect(() => {
  //   if (data) dispatch({ type: "set", payload: data });
  // }, [data]);
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
