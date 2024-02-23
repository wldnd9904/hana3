import { useCallback, useEffect, useRef } from "react";

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

function useTimer4(): {
  reset: () => void;
  clear: () => void;
  useTimeout: (
    cb: TimerHandler,
    ms: number,
    dependencies: unknown[],
    ...args: any[]
  ) => void;
} {
  let timerRef = useRef<ReturnType<typeof setTimeout>>();
  let cbRef = useRef<TimerHandler>();
  let argsRef = useRef<any[]>();
  let msRef = useRef<number>();
  const reset = useCallback(() => {
    clear();
    if (cbRef.current && msRef.current && argsRef.current)
      timerRef.current = setTimeout(
        cbRef.current,
        msRef.current,
        ...argsRef.current
      );
  }, []);
  const clear = useCallback(() => {
    if (timerRef.current) {
      console.log("clear timeout:", timerRef.current);
      clearTimeout(timerRef.current);
    }
  }, []);
  const useTimeout = (
    cb: TimerHandler,
    ms: number = 0,
    dependencies: unknown[] = [],
    ...args: any[]
  ) => {
    useEffect(() => {
      cbRef.current = cb;
      argsRef.current = args;
      msRef.current = ms;
      clear();
      let timer = setTimeout(cb, ms, ...args);
      timerRef.current = timer;
      return () => {
        clearTimeout(timer);
      };
    }, [dependencies]);
  };
  return { reset, clear, useTimeout };
}

export { useTimer4 };

export const useTimeout5 = (
  cb: () => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const cbRef = useRef(cb);
  cbRef.current = cb;
  const delayRef = useRef(delay);
  delayRef.current = delay;

  const setup = useCallback(() => {
    console.log("set-up!!", delay, delayRef.current);
    //                      &100,  &800.current
    // timerRef.current = setTimeout(cbRef.current, delay);
    timerRef.current = setTimeout(cbRef.current, delayRef.current);
    //                            &900.current,  &800.current
    // timerRef.current = setTimeout(cb, delay);
  }, []);
  // const setup = () => {
  //   console.log('set-up!!', delay);
  //   // timerRef.current = setTimeout(cbRef.current, delay);
  //   timerRef.current = setTimeout(cb, delay);
  // };

  const clear = useCallback(() => {
    // console.log('clear!!');
    clearTimeout(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    // console.log('reset!!');
    clear();
    setup();
  }, [setup, clear]);

  useEffect(() => {
    // timerRef.current = setTimeout(cb, delay);
    setup();

    return clear;
  }, dependencies);

  return { reset, clear };
};
