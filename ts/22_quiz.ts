//regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>[0];

const paramObj: RegistUserObj = { name: "Hong", age: 32 };
const newUser2 = registUserObj(paramObj);
console.log("🚀  newUser2:", newUser2);

//debounce와 throttle 함수를 TypeScript로 작성하시오.
function debounce(cb: TimerHandler, ms: number | undefined) {
  let timer: number;
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, ms, ...args);
  };
}
function throttle(cb: TimerHandler, ms: number | undefined) {
  let timer: number;
  return (...args: any[]) => {
    if (!timer) timer = setTimeout(cb, ms, ...args);
  };
}

// test
const debo = debounce((a: number) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) debo(i); // 15

const thro = throttle((a: number) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i); // 11
let a: any;

export {};
