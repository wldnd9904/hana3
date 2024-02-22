import { useEffect, useRef, useState } from "react";
import { useTimer, useTimer2, useTimer3, useTimer4 } from "../hooks/timeout";
import useToggle from "../hooks/toggle";

function Effect() {
  const [isShow, toggleShow] = useToggle();

  const { reset, clear, useTimeout } = useTimer4();

  useTimeout(() => console.log("X"), 1000, []);
  useTimeout(
    (name: string) => console.log(`Hello, ${name}!!!`),
    1000,
    [isShow],
    "Hong"
  );
  return (
    <div id="Effect">
      <span className="title">Effect</span>
      <button onClick={toggleShow}>{!isShow ? "Show" : "Hide"} Timer</button>
      {isShow && (
        <div>
          <button onClick={reset}>Reset</button>
          <button onClick={clear}>Clear</button>
        </div>
      )}
    </div>
  );
}
export default Effect;
