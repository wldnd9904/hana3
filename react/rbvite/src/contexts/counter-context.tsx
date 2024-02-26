import {
  Component,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  ReactPortal,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
type CounterContextProp = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

export const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});
export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, dispatch] = useReducer(
    (count: number, { type, payload }: { type: string; payload: number }) => {
      switch (type) {
        case "plus":
          return count + payload;
        case "minus":
          return count - payload;
        default:
          return count;
      }
    },
    0
  );
  const plusCount = () => dispatch({ type: "plus", payload: 1 });
  const minusCount = () => dispatch({ type: "plus", payload: -1 });
  // const [count, setCount] = useState(0);
  // const plusCount = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const minusCount = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };
  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
