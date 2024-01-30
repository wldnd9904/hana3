const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args), typeof args);

const f3 = (f) => (args) => console.log(f.name, f(args), typeof args);

f2(Math.max)(1, 3, 2, 5, 4);
f3(Math.max)(1, 3, 2, 5, 4);
