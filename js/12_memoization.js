// function factorial(a) {
//   count++;
//   if (a <= 1) return a;
//   return (a * factorial(a - 1)) % 2147483647;
// }

function fibonacci(a) {
  count++;
  if (a <= 2) return 1;
  return fibonacci(a - 1) + fibonacci(a - 2);
}

function memoization(fn) {
  const memoTable = {};
  return (K) => {
    return memoTable[K] || (memoTable[K] = fn(K));
  };
}

let count = 0;

let memoizedFibonacci = memoization((a) => {
  count++;
  return a < 2 ? a : memoizedFibonacci(a - 1) + memoizedFibonacci(a - 2);
});

let memoizedFactorial = memoization((a) => {
  count++;
  return a <= 2 ? a : a * memoizedFactorial(a - 1);
});

function compare(i) {
  count = 0;
  console.log(memoizedFibonacci(i), count);
  // count = 0;
  // console.log(memoizedFibonacci(i * 2), count);
  count = 0;
  console.log(memoizedFactorial(i), count);
}

compare(50);
compare(50);
compare(50);
compare(50);
compare(50);
