let prm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(23);
    reject("gd");
  }, 500);
})
  .then(console.log)
  .catch((err) => console.log(err))
  .finally(console.log);
