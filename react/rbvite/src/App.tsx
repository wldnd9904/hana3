// src/App.tsx
import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import Hello from "./components/Hello";
import My, { ItemHandler } from "./components/My";
import "./App.css";
import { useCounter } from "./contexts/counter-context";
import { SessionProvider, useSession } from "./contexts/session-context";
import Effect from "./components/Effect";
import { Position } from "./type";
import { MouseCapturer } from "./components/MouseCapturer";

function App() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);
  const myItemControlRef = useRef<ItemHandler>(null);
  const { count, plusCount } = useCounter();
  const { session } = useSession();

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
    <SessionProvider>
      <div id="App">
        <span className="title">App</span>
        <Effect />
        <h1 ref={titleRef}>Vite + React + TS</h1>
        <div
          style={{ display: "grid", gridTemplateColumns: "130px 130px 130px" }}
        >
          <button
            onClick={() => myItemControlRef.current?.loginHandler.focusId()}
          >
            Login - ID
          </button>{" "}
          <button
            onClick={() => myItemControlRef.current?.loginHandler.focusName()}
          >
            Login - 이름
          </button>{" "}
          <button
            onClick={() => myItemControlRef.current?.loginHandler.noti("ㅎㅇ")}
          >
            Login - 알림
          </button>
          <button
            onClick={() =>
              myItemControlRef.current?.removeItem(session.cart[0].id ?? 0)
            }
          >
            My - 첫 항목 제거
          </button>
          <button onClick={() => myItemControlRef.current?.notify("ㅎㅇ")}>
            My - 메시지 설정
          </button>
        </div>
        <h2>count: {count}</h2>
        <My ref={myItemControlRef} />
        <button
          onClick={() => {
            alert(inpRef.current!.value);
          }}
        >
          H5내용 읽어오기
        </button>
        <H5 ss={"ss"} ref={inpRef}></H5>

        <Hello name="홍길동" age={30 + count} plusCount={plusCount}>
          <h3>반갑습니다(App에서 넣음)</h3>
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
    </SessionProvider>
  );
}

export default App;
