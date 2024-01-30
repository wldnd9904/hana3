function hello(name) {
  console.log(`Hi ${name}!`);
  return `return: Hi ${name}!`;
}

hello("Jiung");
const hi = hello;
hi("Kim");

function printFnReturnValue(fn, name) {
  console.log(fn(name));
}

printFnReturnValue(hi, "Genji");

const f1 = function ff(x, isLast) {
  console.log(x);
  if (isLast) return;
  else ff("efg", true);
};

f1(); // OK
ff(); // Error! ff is not defined!
