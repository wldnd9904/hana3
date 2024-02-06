const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log("promise>>", id);
    if (id < 5) resolve(id + 1);
    else reject(new Error("reject>>" + id));
  });

promiseFn(1)
  .then((res) => {
    console.log("res1>>", res);
    return promiseFn(res);
  })
  .then((res) => {
    console.log("res2>>", res);
    return promiseFn(res);
  })
  .then(promiseFn)
  .then((res) => promiseFn(res))
  .catch((err) => console.log("Error>>", err.toString()))
  .finally(() => {
    console.log("finally");
  });

import { rand } from "./utils/index.js";
const randTime = () =>
  new Promise((resolve) => {
    const sec = rand(1, 4) * 500;
    console.log(sec);
    setTimeout(() => {
      console.log(sec + "done");
      return resolve(sec);
    }, sec);
  });

const isParallel = true;
console.time("promi");
if (isParallel) {
  Promise.race([randTime(), randTime(), randTime()]).then((res) => {
    console.timeEnd("promi");
    console.log(res);
  });
} else {
  randTime().then(() => randTime().then(() => randTime()));
}
