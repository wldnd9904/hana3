import { useState, useLayoutEffect } from "react";
import { Position } from "../type";

export const MouseCapturer = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const catchMousePosition = ({ x, y }: Position) => {
    setPosition({ x, y });
  };
  useLayoutEffect(() => {
    // ← 만약 useEffect로 하면?? 거의(컴이 빠르면 찰나의 차이) 동일
    window.addEventListener("mousemove", catchMousePosition);
    return () => window.removeEventListener("mousemove", catchMousePosition);
  });
  return <small>{JSON.stringify(position)}</small>;
};
