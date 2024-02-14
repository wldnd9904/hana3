"use strict";
function read(page) {
    console.log(page.text);
    // page.text = "Hello";
}
const pageIsh = {
    text: "Hello, world!",
};
pageIsh.text = "Hello"; //OK
read(pageIsh);
const hasBoth = {
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
