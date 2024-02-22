// src/components/Login.tsx

import {
  FormEvent,
  FormEventHandler,
  MutableRefObject,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useCounter } from "../contexts/counter-context";
import { useSession } from "../contexts/session-context";
import useToggle from "../hooks/toggle";
export type LoginHandle = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};
const ADDRESSLIST = ["서울", "시골", "귤"];

const Login = forwardRef(({}, ref) => {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [address, setAddress] = useState("서울");
  const [show, toggleShow] = useToggle();
  const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLSelectElement | null>(null);
  const { login } = useSession();
  const handler = {
    noti: (msg: string) => alert(msg),
    focusId: () => idRef.current?.focus(),
    focusName: () => nameRef.current?.focus(),
  };
  useImperativeHandle(ref, () => handler);
  const { count, plusCount, minusCount } = useCounter();

  // const changeAddress = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setAddress(e.currentTarget.value);
  // };
  const clear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    idRef.current!.value = "";
    nameRef.current!.value = "";
    ageRef.current!.value = "";
    addressRef.current!.value = "";
  };
  const submitLogin: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    for (const [fieldRef, fieldName] of [
      [idRef, "ID를"],
      [nameRef, "이름을"],
      [ageRef, "나이를"],
    ]) {
      const ref = fieldRef as MutableRefObject<HTMLInputElement | null>;
      if (!ref.current?.value) {
        alert(fieldName + " 입력하세요.");
        ref.current?.focus();
        return;
      }
    }
    if (
      !addressRef.current ||
      !ADDRESSLIST.includes(addressRef.current.value)
    ) {
      alert("주소를 선택하세요.");
      addressRef.current?.focus();
      return;
    }
    const id = idRef.current!.value;
    const name = nameRef.current!.value;
    const age = ageRef.current!.value;
    const address = addressRef.current!.value;
    login(+id, name, address, +age);
  };

  useEffect(() => {
    plusCount();
    return () => minusCount();
  }, []);
  return (
    <div id="Login">
      <span className="title">Login</span>
      <button
        onClick={toggleShow}
        style={show ? { border: "1px solid blue" } : {}}
      >
        {show ? "show" : "hide"}
      </button>
      <span>count in counter-context:{count}</span>
      <form onSubmit={submitLogin}>
        <div id="loginContainer">
          <div>ID:</div>
          <input type="number" ref={idRef}></input>
          <div>Name:</div>
          <input type="text" ref={nameRef}></input>
          <div>Age:</div>
          <input type="number" ref={ageRef}></input>
          <div>Address:</div>
          <select ref={addressRef}>
            {ADDRESSLIST.map((addr, idx) => (
              <option key={idx}>{addr}</option>
            ))}
          </select>
        </div>
        <button type="submit">Login</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
});
Login.displayName = "Login";
export default Login;
