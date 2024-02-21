import {
  FormEvent,
  FormEventHandler,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useCounter } from "../contexts/counter-context";
export type LoginHandle = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};
// src/components/Login.tsx
type Props = {
  login: (id: number, name: string, address: string, age: number) => void;
};

const ADDRESSLIST = ["서울", "시골", "귤"];

const Login = forwardRef(({ login }: Props, ref) => {
  // const [id, setId] = useState(0);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [address, setAddress] = useState("서울");
  const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLSelectElement | null>(null);
  const handler = {
    noti: (msg: string) => alert(msg),
    focusId: () => idRef.current?.focus(),
    focusName: () => nameRef.current?.focus(),
  };
  useImperativeHandle(ref, () => handler);
  const { count } = useCounter();

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
    if (!idRef.current?.value) {
      alert("ID를 입력하세요.");
      idRef.current?.focus();
      return;
    }
    if (!nameRef.current?.value) {
      alert("이름을 입력하세요.");
      nameRef.current?.focus();
      return;
    }
    if (!ageRef.current?.value) {
      alert("나이를 입력하세요.");
      ageRef.current?.focus();
      return;
    }
    if (
      !addressRef.current ||
      !ADDRESSLIST.includes(addressRef.current.value)
    ) {
      alert("주소를 선택하세요.");
      addressRef.current?.focus();
      return;
    }
    const id = idRef.current.value;
    const name = nameRef.current?.value;
    const age = ageRef.current?.value;
    const address = addressRef.current?.value;
    login(+id, name, address, +age);
  };
  return (
    <div id="Login">
      <span className="title">Login</span>
      <span>count in counter-context:{count}</span>
      <form onSubmit={submitLogin}>
        <div id="loginContainer">
          <div>ID:</div>
          <input
            type="number"
            // value={id}
            // onChange={(evt) => {
            //   setId(parseInt(evt.currentTarget.value));
            // }
            ref={idRef}
          ></input>
          <div>Name:</div>
          <input
            type="text"
            // value={name}
            // onChange={(evt) => {
            //   setName(evt.currentTarget.value);
            // }}
            ref={nameRef}
          ></input>
          <div>Age:</div>
          <input
            type="number"
            // value={age}
            // onChange={(evt) => {
            //   setAge(parseInt(evt.currentTarget.value));
            // }}
            ref={ageRef}
          ></input>
          <div>Address:</div>
          <select /*value={address} onChange={changeAddress}*/ ref={addressRef}>
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
