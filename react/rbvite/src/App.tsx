// src/App.tsx
import { forwardRef, useRef, useState } from "react";
import Hello from "./components/Hello";
import My from "./components/My";
import "./App.css";
import { flushSync } from "react-dom";

export type LoginUser = {
  id: number;
  name: string;
  address: string;
  age: number;
};
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession = {
  loginUser: { id: 1, name: "Hong", address: "서울", age: 20 },
  cart: [
    { id: 100, name: "라면", price: 3000 },
    { id: 101, name: "컵라면", price: 2000 },
    { id: 200, name: "파", price: 5000 },
  ],
};
function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);
  const logoutBtnRef = useRef<HTMLButtonElement>();
  const plusCount = () => {
    for (let i = 0; i < 10; i++) {
      flushSync(() => {
        setCount((prevCount) => prevCount + 1);
      });
    }
  };
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
  const H5 = forwardRef(
    ({ ss }: { ss: string }, ref: React.LegacyRef<HTMLInputElement>) => {
      return (
        <div id="H5">
          <span className="title">H5</span>
          <input ref={ref}></input>
        </div>
      );
    }
  );
  H5.displayName = "H5";
  console.log("rerender");
  return (
    <div id="App">
      <span className="title">App</span>
      <h1 ref={titleRef}>Vite + React + TS</h1>
      <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
        changeItem={changeItem}
        addItem={addItem}
      />
      <button
        onClick={() => {
          alert(inpRef.current!.value);
        }}
      >
        H5내용 읽어오기
      </button>
      <H5 ss={"ss"} ref={inpRef}></H5>
      <Hello name="홍길동" age={30 + count} plusCount={plusCount}>
        <h3>반갑습니다~</h3>
      </Hello>
      <h2>count: {count}</h2>
      <button
        onClick={() => {
          titleRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Top
      </button>
    </div>
  );
}

export default App;
