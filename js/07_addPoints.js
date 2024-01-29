function addPoints(a, b) {
  if (String(a).length < String(b).length) [a, b] = [b, a];
  let pow = 10 ** (String(a).length - 2);
  let ret = Math.round((a + b) * pow) / pow;

  console.log(a, " + ", b, " = ", ret);
  return ret;
}

addPoints(0.21354, 0.9999);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);
