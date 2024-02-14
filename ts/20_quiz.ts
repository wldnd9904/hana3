function add(a: number, b: string) {
  return a + b;
}
function gd() {
  return "gd";
}
type FirstArgs<F> = F extends (a: infer U, ...b: any) => any ? U : never;
type SecondArgs<F> = F extends (a: any, b: infer U, ...c: any) => any
  ? U
  : never;
type FirstArgs2<F> = F extends (...args: infer U) => any
  ? U[0] extends undefined
    ? never
    : U[0]
  : never;
type SecondArgs2<F> = F extends (...args: infer U) => any
  ? U[1] extends undefined
    ? never
    : U[1]
  : never;
type Args<F> = F extends (...args: infer U) => any ? U[number] : never;

type A = FirstArgs2<typeof add>; // number
type B = SecondArgs2<typeof add>; // string
type C = Args<typeof add>; // number | string
type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
type BX = Args<typeof String.prototype.charAt>;
// => number
type NEVER = SecondArgs2<typeof gd>;
export {};
