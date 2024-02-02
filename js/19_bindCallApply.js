function f(id, addr) {
  console.log(this, id, addr, this.name);
}

const obj = { name: "Hong" };

const bf = f.bind(obj);
bf(1, "SungSu");

f.apply(obj, [1, "SongSu"]);
f.call;
