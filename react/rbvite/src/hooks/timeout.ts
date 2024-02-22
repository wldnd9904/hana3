import { useEffect } from "react";

const useTimer = () => {
  return {
    useTimeout: (
      fn: (...args: any[]) => void,
      ms: number = 0,
      dependencies: unknown[] = [],
      ...args: any[]
    ) => {
      console.log(`timer set: ${fn.toString()}, [${args}]`);
      let timer: ReturnType<typeof setTimeout>;
      useEffect(() => {
        return () => {
          clearTimeout(timer);
          console.log(`timer cleared: ${fn.toString()}, [${args}]`);
        };
      }, [dependencies]);
      timer = setTimeout(fn, ms, args);
    },
  };
};

function useTimer2(): {
  timer: ReturnType<typeof setTimeout> | undefined;
  reset: () => void;
  clear: () => void;
  useTimeout: (
    cb: (...args: any[]) => void,
    ms: number | undefined,
    dependencies: unknown[],
    ...args: any[]
  ) => void;
} {
  //리셋할때 저장한거 불러오도록
  let cachedCb: (...args: any[]) => void;
  let cachedArgs: any[];
  let cachedMs: number;
  let timer: ReturnType<typeof setTimeout> | undefined;

  return {
    get timer() {
      `${timer}: gettimer ${cachedCb},${cachedMs},[${cachedArgs}]`;
      return timer;
    },
    reset() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(cachedCb, cachedMs, cachedArgs);
      console.log(
        `${timer}: reset timer, ${cachedCb},${cachedMs},[${cachedArgs}]`
      );
    },
    clear() {
      if (timer) clearTimeout(timer);
      console.log(`${timer}: timer cleared`);
    },
    useTimeout(
      cb: (...args: any[]) => void,
      ms: number = 0,
      dependencies: unknown[] = [],
      ...args: any[]
    ) {
      if (timer) {
        clearTimeout(timer);
        console.log(`${timer}: timer cleared`);
      }
      useEffect(() => {
        return () => {
          clearTimeout(timer);
          console.log(`${timer}: timer cleared: ${cb.toString()}, [${args}]`);
        };
      }, [dependencies]);
      cachedCb = cb;
      cachedArgs = args;
      cachedMs = ms;
      timer = setTimeout(cb, ms, args);
      console.log(`${timer}: timer set: ${cb.toString()}, [${args}]`);
    },
  };
}

function useTimer3(): {
  reset: () => void;
  clear: () => void;
  useTimeout: (
    cb: (...args: any[]) => void,
    ms: number | undefined,
    dependencies: unknown[],
    ...args: any[]
  ) => void;
} {
  //리셋할때 저장한거 불러오도록
  let cachedCb: (...args: any[]) => void;
  let cachedArgs: any[];
  let cachedMs: number;
  let timer: ReturnType<typeof setTimeout> | undefined;
  return {
    reset() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(cachedCb, cachedMs, cachedArgs);
      console.log(
        `${timer}: reset timer, ${cachedCb},${cachedMs},[${cachedArgs}]`
      );
    },
    clear() {
      if (timer) clearTimeout(timer);
      console.log(`${timer}: timer cleared`);
    },
    useTimeout(
      cb: (...args: any[]) => void,
      ms: number = 0,
      dependencies: unknown[] = [],
      ...args: any[]
    ) {
      if (timer) {
        clearTimeout(timer);
        console.log(`${timer}: timer cleared`);
      }
      useEffect(() => {
        return () => {
          clearTimeout(timer);
          console.log(`${timer}: timer cleared: ${cb.toString()}, [${args}]`);
        };
      }, [dependencies]);
      cachedCb = cb;
      cachedArgs = args;
      cachedMs = ms;
      timer = setTimeout(cb, ms, args);
      console.log(`${timer}: timer set: ${cb.toString()}, [${args}]`);
    },
  };
}

export { useTimer, useTimer2, useTimer3 };
