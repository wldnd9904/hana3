import { useState } from "react";

// src/components/Login.tsx
type Props = {
  login: (id: number, name: string, address: string, age: number) => void;
};

const ADDRESSLIST = ["서울", "시골", "귤"];

const Login = ({ login }: Props) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("서울");
  const changeAddress = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddress(e.currentTarget.value);
  };
  return (
    <>
      <div id="loginContainer">
        <div>ID:</div>
        <input
          type="number"
          value={id}
          onChange={(evt) => {
            setId(parseInt(evt.currentTarget.value));
          }}
        ></input>
        <div>Name:</div>
        <input
          type="text"
          value={name}
          onChange={(evt) => {
            setName(evt.currentTarget.value);
          }}
        ></input>
        <div>Age:</div>
        <input
          type="number"
          value={age}
          onChange={(evt) => {
            setAge(parseInt(evt.currentTarget.value));
          }}
        ></input>
        <div>Address:</div>
        <select value={address} onChange={changeAddress}>
          {ADDRESSLIST.map((addr, idx) => (
            <option key={idx}>{addr}</option>
          ))}
        </select>
      </div>
      <button
        onClick={() => {
          login(id, name, address, age);
        }}
      >
        Login
      </button>
    </>
  );
};
export default Login;
