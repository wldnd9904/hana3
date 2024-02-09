// 서로 다른 버전의 함수들 -> `오버로드 시그니처`
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> `구현 시그니처`
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
func(1);
