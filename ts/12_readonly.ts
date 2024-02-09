interface Page {
  readonly text: string;
}
function read(page: Page) {
  console.log(page.text);
  page.text = "Hello";
}

const pageIsh = {
  text: "Hello, world!",
};
pageIsh.text = "Hello"; //OK

read(pageIsh);

interface HasBothFunctionTypes {
  readonly property: () => string; // 속성 구문
  method(): string; // 메서드 구문
  // readonly method(): string;// Error
  property2?: () => string; // optional
  method2?(): string; // optional
}

const hasBoth: HasBothFunctionTypes = {
  property: () => "",
  method() {
    return "";
  },
  property2() {
    return "";
  }, // property2는 속성 구문으로 타입이 정의 되었지만 메서드로 사용 가능
  method2: () => "",
};

hasBoth.property();
hasBoth.property2 && hasBoth.property2();
hasBoth.method();
hasBoth.method2 && hasBoth?.method2();
