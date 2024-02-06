//다음 코드를 Promise를 이용하여 refactoring 하시오.
/*setTimeout(function () {
  console.log("depth1", new Date());
  setTimeout(function () {
    console.log("depth2", new Date());
    setTimeout(function () {
      console.log("depth3", new Date());
      throw new Error("Already 3-depth!!");
    }, 3000);
  }, 2000);
}, 1000);
*/
const promiseTimeout = (n) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${n}`, new Date());
      if (n == 3) reject(new Error("Already 3-depth!!!"));
      resolve(n + 1);
    }, n * 1000);
  });

console.log("START!", new Date());
try {
  for await (const pt of [1, 2, 3].map((n) => () => promiseTimeout(n))) pt();
} catch (err) {
  console.log(err.message);
}
/*promiseTimeout(1)
  .then(promiseTimeout)
  .then(promiseTimeout)
  .then(promiseTimeout)
  .catch((error) => console.log(error.message));
*/
