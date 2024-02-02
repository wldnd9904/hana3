// 이전 장표에서 작성한 Stack과 Queue에 공통 기능을 확장하시오.(Collection)
// // 공통: clear(), toArray(), print(), remove(), isEmtpy, peek, poll, length(size)
// // peek: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 (요소 삭제 없음!)
// // poll: 가장 (Stack:나중, Queue:먼저) 들어간 요소 반환 & 삭제 ⇐⇒ Stack.pop, Queue.dequeue
// // remove: 가장 (Stack:나중, Queue:먼저) 들어간 요소 삭제(skip)
// console.log(stack.peek, queue.peek); // 마지막(다음에 나올) 원소
// queue.print(); // 출력해보기
// const arr = queue.toArray().map(a => console.log(a));
// if (!stack.isEmpty) stack.clear();
// if (queue.length) queue.clear();

class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
  }
  push(args) {
    this.#arr.push(args);
    return this;
  }
  size() {
    return this.#arr?.length;
  }
  toString() {
    return `${this.constructor.name} (size:${this.size()})\n ${JSON.stringify(
      this.#arr
    )}`;
  }
  get _arr() {
    return this.#arr;
  }
  clear() {
    this.#arr.clear();
  }
  toArray() {
    return [...this.#arr]; //오염의 여지가 있으므로 딥카피
  }
  print() {
    console.log(this.#arr);
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i += 1) {
      yield this._arr[i];
    }
  }
  iterator() {
    return this[Symbol.iterator]();
  }
}
class Stack extends Collection {
  pop() {
    return this._arr.pop();
  }
}

class Queue extends Collection {
  enqueue(args) {
    this.push(args);
    return this;
  }
  dequeue() {
    return this._arr.shift();
  }
}

const stk = new Stack(1, 2, 3);

console.log(stk.toString());
stk.push(1);
console.log(stk.toString());
stk.push(1, 2);

console.log(stk.toString());
stk.push(1);
stk.push(2);
console.log(stk.toString());

stk.pop();
console.log(stk.toString());

stk.pop();
console.log(stk.toString());

stk.pop();
console.log(stk.toString());

stk.pop();
console.log(stk.toString());

stk.pop();
console.log(stk.toString());

const que = new Queue();
console.log("");
console.log(que.toString());
que.enqueue(1);
console.log(que.toString());
que.enqueue(1, 2);

console.log(que.toString());
que.enqueue(1);
que.enqueue(2);
console.log(que.toString());

que.dequeue();
console.log(que.toString());

que.dequeue();
console.log(que.toString());

que.dequeue();
console.log(que.toArray());

que.dequeue();
console.log(que.toString());

que.dequeue();
console.log(que.toString());

que.enqueue(1);
que.enqueue(11);
que.enqueue(111);
que.enqueue(1111);
que.enqueue(11111);
que.enqueue(111111);
que.enqueue(1111111);
que.print();
let it = que.iterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
