// src/components/My.tsx
import { MouseEventHandler, useRef } from "react";
import { Cart, Session } from "../App";
import Login from "./Login";
import Profile from "./Profile";

type Props = {
  session: Session;
  login: (id: number, name: string, address: string, age: number) => void;
  logout: () => void;
  removeItem: (id: number) => void;
  addItem: (item: Cart) => void;
};

function My({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
  addItem,
}: Props) {
  const itemNameRef = useRef<HTMLInputElement | null>(null);
  const itemPriceRef = useRef<HTMLInputElement | null>(null);
  const itemIDRef = useRef<HTMLInputElement | null>(null);
  const append = () => {
    if (!itemIDRef.current?.value) {
      alert("상품ID를 입력하세요.");
      itemIDRef.current?.focus();
      return;
    }
    if (!itemNameRef.current?.value) {
      alert("상품명을 입력하세요.");
      itemNameRef.current?.focus();
      return;
    }
    if (!itemPriceRef.current?.value) {
      alert("상품가격을 입력하세요.");
      itemPriceRef.current?.focus();
      return;
    }
    addItem({
      name: itemNameRef.current.value,
      price: +itemPriceRef.current.value,
      id: +itemIDRef.current.value,
    });
    itemNameRef.current!.value = "";
    itemPriceRef.current!.value = "";
    itemIDRef.current!.value = "";
  };
  return (
    <div id="My">
      <div className="title">My</div>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul>
        {loginUser &&
          cart.map(({ id, name, price }) => (
            <li key={id}>
              {name}({price})
              <button
                onClick={() => {
                  removeItem(id);
                }}
              >
                X
              </button>
            </li>
          ))}
      </ul>
      <label>상품ID</label>
      <input type="number" ref={itemIDRef}></input>
      <label>상품명</label>
      <input type="text" ref={itemNameRef}></input>
      <label>가격</label>
      <input type="number" ref={itemPriceRef}></input>
      <button onClick={append}>추가</button>
    </div>
  );
}
export default My;
