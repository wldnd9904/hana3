// 다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오.
import assert from "assert";

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];
const N = arr.length;
function rangeSum(from: number = 0, to: number = -1): number {
  const fromidx = from < 0 ? N + from : from;
  const toidx = to < 0 ? N + to : to;
  let sum = 0;
  for (let i = fromidx; i <= toidx; i++) sum += arr[i];
  return sum;
}

const segTree = [...Array<number>(N), ...arr];
for (let i = N - 1; i != 0; i--) {
  segTree[i] = segTree[i << 1] + segTree[(i << 1) | 1];
}

function rangeSum2(from: number = 0, to: number = -1): number {
  let left = from < 0 ? N + from : from;
  let right = to < 0 ? N + to + 1 : to + 1;
  let sum = 0;
  for (left += N, right += N; left != right; left >>= 1, right >>= 1) {
    if (left & 1) sum += segTree[left++];
    if (right & 1) sum += segTree[--right];
  }
  console.log(sum);
  return sum;
}

assert.deepStrictEqual(rangeSum2(2, 5), 19);
assert.deepStrictEqual(rangeSum2(3, 5), 15);
assert.deepStrictEqual(rangeSum2(1, 4), 14);
assert.deepStrictEqual(rangeSum2(0, 4), 15);
assert.deepStrictEqual(rangeSum2(5, 8), 30);
assert.deepStrictEqual(rangeSum2(6, 8), 22);
assert.deepStrictEqual(rangeSum2(2, 8), 41);
assert.deepStrictEqual(rangeSum2(4, 4), 5);
assert.deepStrictEqual(rangeSum2(5), 30);
assert.deepStrictEqual(rangeSum2(2), 41);
assert.deepStrictEqual(rangeSum2(), 45);

// 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
// 배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N)
// 함수를 작성하시오.

function keyPair(arr: number[], N: number): [number, number] {
  for (let i = 0; i < arr.length; i++)
    for (let j = i; j < arr.length; j++)
      if (arr[i] + arr[j] == N) return [i, j];
  return [0, 0];
}

function keyPair2(arr: number[], N: number): [number, number] {
  const map: { [key: number]: number } = {};
  for (let idx = 0; idx < arr.length; idx++) {
    if (map[N - arr[idx]]) {
      console.log([map[N - arr[idx]], idx]);
      return [map[N - arr[idx]], idx];
    }
    map[arr[idx]] = idx;
  }
  return [0, 0];
}

// cf. O(n^2) ⇒ O(N) || O(logN)
assert.deepStrictEqual(keyPair2([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair2([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair2([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair2([1, 2, 3, 4, 5, 7], 9), [3, 4]);

export {};
