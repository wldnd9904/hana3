import { useState } from "react";

// src/components/Login.tsx
type Props = {
  login: (id: number, name: string) => void;
};

const Login = ({ login }: Props) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  return (
    <>
      <div>
        Login ID(숫자):{" "}
        <input
          type="number"
          value={id}
          onChange={(evt) => {
            setId(parseInt(evt.target.value));
          }}
        ></input>
      </div>
      <div>
        Login Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(evt) => {
            setName(evt.target.value);
          }}
        ></input>
      </div>
      <button
        onClick={() => {
          login(id, name);
        }}
      >
        Login
      </button>
    </>
  );
};
export default Login;
