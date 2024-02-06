import { execSync } from "child_process";

//다음 함수가 2초 후 리턴하도록 await과 Promise를 이용하여 sleep 해 보세요.

const f = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) throw new Error("Failt to Fetch!!");

  //execSync("sleep 1"))
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.name;
};

console.log(await f());
