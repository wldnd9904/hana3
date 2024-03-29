// src/components/My.tsx
import { Ref, forwardRef, useImperativeHandle, useRef, useState } from "react";
import Login, { LoginHandle } from "./Login";
import Profile from "./Profile";
import Item from "./Item";
import { useSession } from "../contexts/session-context";

export type ItemHandler = {
  notify: (msg: string) => void;
  removeItem: (itemID: number) => void;
  loginHandler: LoginHandle;
};
const My = forwardRef(({}, ref: Ref<ItemHandler>) => {
  const [message, setMessage] = useState("");
  const itemNameRef = useRef<HTMLInputElement | null>(null);
  const itemPriceRef = useRef<HTMLInputElement | null>(null);
  const itemIDRef = useRef<HTMLInputElement | null>(null);
  const loginHandlerRef = useRef<LoginHandle>(null);
  const { session, removeItem, changeItem, addItem, totalPrice } = useSession();
  const itemHandler: ItemHandler = {
    notify: (msg) => {
      setMessage(msg);
    },
    removeItem: (id) => {
      removeItem(id);
    },
    loginHandler: {
      noti: (msg: string) => loginHandlerRef.current?.noti(msg),
      focusId: () => loginHandlerRef.current?.focusId(),
      focusName: () => loginHandlerRef.current?.focusName(),
    },
  };
  useImperativeHandle(ref, () => itemHandler);
  const append = () => {
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
      id: itemIDRef.current!.value ? +itemIDRef.current!.value : undefined,
      name: itemNameRef.current.value,
      price: +itemPriceRef.current.value,
    });
    itemNameRef.current!.value = "";
    itemPriceRef.current!.value = "";
    itemIDRef.current!.value = "";
  };
  return (
    <div id="My">
      <div className="title">My</div>
      <span>{message}</span>
      {session.loginUser ? <Profile /> : <Login ref={loginHandlerRef} />}
      <label>합계: {totalPrice.toLocaleString()}원</label>
      <ul>
        {session.loginUser &&
          session.cart.map((item) => (
            <Item
              item={item}
              key={item.id}
              // onRemove={removeItem}
              // onChange={changeItem}
            />
          ))}
      </ul>
      <div id="newItem">
        <label>상품ID:</label>
        <input type="number" ref={itemIDRef}></input>
        <label>상품명:</label>
        <input type="text" ref={itemNameRef}></input>
        <label>가격:</label>
        <input type="number" ref={itemPriceRef}></input>
        <button onClick={append}>추가</button>
      </div>
    </div>
  );
});
My.displayName = "My";
export default My;
