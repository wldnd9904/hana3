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

console.log("-------");
console.log(promiseFn(0));
console.log("-------");

console.log(Promise.resolve(1));
