import { useRef } from "react";
import { useCounter } from "../contexts/counter-context";
import { useSession } from "../contexts/session-context";
import Effect from "./Effect";
import { H5 } from "./H5";
import Hello from "./Hello";
import My, { ItemHandler } from "./My";

function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);
  const myItemControlRef = useRef<ItemHandler>(null);
  const { count, plusCount } = useCounter();
  const { session } = useSession();
  return (
    <div id="Home">
      <div className="title">Home</div>
      <Effect />
      <h1 ref={titleRef}>Vite + React + TS</h1>
      {/* <DeferTrans /> */}
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
  );
}
export default Home;
