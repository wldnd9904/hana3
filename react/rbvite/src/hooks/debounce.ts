import { useEffect, useState } from "react";

export const useDebounce = (
  cb: () => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  useEffect(() => {
    const timer = setTimeout(cb, delay);
    return () => clearTimeout(timer);
  }, dependencies);
};

// export const useThrottle = (delay: number) => {
//   const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
//   let callback: () => void;
//   return (cb: () => void) => {
//     callback = cb;
//     if (!timer)
//       setTimer(
//         setTimeout(() => {
//           if (callback) callback();
//           setTimer(undefined);
//         }, delay)
//       );
//   };
// };
