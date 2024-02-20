// src/components/My.tsx
import {
  MouseEventHandler,
  Ref,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Cart, Session } from "../App";
import Login, { LoginHandle } from "./Login";
import Profile from "./Profile";
import Item from "./Item";

type Props = {
  session: Session;
  login: (id: number, name: string, address: string, age: number) => void;
  logout: () => void;
  removeItem: (id: number) => void;
  changeItem: (item: Cart) => void;
  addItem: (item: { id: number | null; name: string; price: number }) => void;
};
export type ItemHandler = {
  notify: (msg: string) => void;
  removeItem: (itemID: number) => void;
  loginHandler: LoginHandle;
};
const My = forwardRef(
  (
    {
      session: { loginUser, cart },
      login,
      logout,
      removeItem,
      changeItem,
      addItem,
    }: Props,
    ref: Ref<ItemHandler>
  ) => {
    const [message, setMessage] = useState("");
    const itemNameRef = useRef<HTMLInputElement | null>(null);
    const itemPriceRef = useRef<HTMLInputElement | null>(null);
    const itemIDRef = useRef<HTMLInputElement | null>(null);
    const loginHandlerRef = useRef<LoginHandle>(null);

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
        name: itemNameRef.current.value,
        price: +itemPriceRef.current.value,
        id: itemIDRef.current!.value ? +itemIDRef.current!.value : null,
      });
      itemNameRef.current!.value = "";
      itemPriceRef.current!.value = "";
      itemIDRef.current!.value = "";
    };
    return (
      <div id="My">
        <div className="title">My</div>
        <span>{message}</span>
        {loginUser ? (
          <Profile loginUser={loginUser} logout={logout} />
        ) : (
          <Login ref={loginHandlerRef} login={login} />
        )}
        <ul>
          {loginUser &&
            cart.map((item) => (
              <Item
                item={item}
                key={item.id}
                onRemove={removeItem}
                onChange={changeItem}
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
  }
);
My.displayName = "My";
export default My;
