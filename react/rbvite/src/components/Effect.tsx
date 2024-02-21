import { useEffect, useLayoutEffect, useRef, useState } from "react";

function Effect() {
  const [isShow, setShow] = useState<boolean>(false);
  const hRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!hRef.current) return;
    console.log(hRef.current?.getBoundingClientRect());
    hRef.current.style.top = `${Math.round(Math.random() * 100)}px`;
    setShow(!isShow);
  }, [isShow]);
  useLayoutEffect(() => {}, [isShow]);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>Show Effect</button>
      {isShow && (
        <h1 ref={hRef} style={{ position: "absolute" }}>
          Article
        </h1>
      )}
    </>
  );
}
export default Effect;
