// src/components/Hello.tsx
import { PropsWithChildren } from "react";

type Props = {
  name: string;
  age: number;
  plusCount: () => void;
};

const Hello = ({
  name,
  age,
  plusCount,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div id="Hello">
      <div className="title">Hello</div>
      <h3>
        Hello, {name}({age})
      </h3>
      {children}
      <button onClick={plusCount}>count + 1</button>
    </div>
  );
};
export default Hello;
