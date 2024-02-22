import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTimer, useTimer2, useTimer3 } from "../hooks/timeout";

function Effect() {
  const [isShow, setShow] = useState<boolean>(false);
  const hRef = useRef<HTMLHeadingElement>(null);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const fullName = `${first} ${last}`;

  const { reset, clear, useTimeout } = useTimer3();

  useTimeout(() => console.log("X"), 1000, []);
  useTimeout((name) => console.log(`Hello, ${name}!!!`), 1000, [], "Hong");
  clear();
  reset();
  // const [count, setCount] = useState(0);
  // const plusCount = useCallback(() => setCount((c) => c + 1), []);
  // const minusCount = useCallback(() => setCount((c) => c - 1), []);
  // useEffect(() => {
  //   plusCount();
  //   return () => minusCount();
  // }, [plusCount, minusCount]);

  useEffect(() => {
    if (!hRef.current) return;
    console.log(hRef.current?.getBoundingClientRect());
    hRef.current.style.top = `${Math.round(Math.random() * 100)}px`;
    setShow(!isShow);
    console.log("useEffect");
  }, [isShow]);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>Show Effect</button>
      {/* <div>{count}</div> */}
      <div>{fullName}</div>
      <input
        type="text"
        onChange={(e) => {
          setFirst(e.currentTarget.value);
        }}
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setLast(e.currentTarget.value);
        }}
      ></input>
      {isShow && (
        <h1 ref={hRef} style={{ position: "absolute" }}>
          Article
        </h1>
      )}
    </>
  );
}
export default Effect;
