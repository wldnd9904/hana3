class MyPromise {
  #thens = [];
  #catches = [];
  #finallies = [];
  #state = "pending";
  constructor(fn) {
    fn(
      (succ) => thenRecur(succ),
      (err) => catchRecur(err)
    );
  }
  then(fn) {
    this.#thens.push(fn);
    return this;
  }
  catch(fn) {
    this.#catches.push(fn);
    return this;
  }
  finally(fn) {
    this.#finallies.push(fn);
    return this;
  }

  #finalRunner = () => {
    for (const f of this.#finallies) f();
  };
}

console.log(new MyPromise(() => {}));
