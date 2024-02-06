let s = "강원도 고성군 토성면 북면";
console.log(s.match(/.성(군|면)/g)); // [ '고성군', '토성면' ]
console.log(s.match(/..?(군|면)/g)); // [ '고성군', '토성면', ' 북면' ]
console.log(s.match(/..{0,1}(군|면)/g)); // [ '고성군', '토성면', ' 북면' ]
console.log(s.match(/\S.?(군|면)/g)); // [ '고성군', '토성면', '북면' ]   ⇐⇒ s.match(/\S.{0,1}(군|면)/g)
console.log(s.match(/\S.*(군|면)/g)); // ?     ⇐⇒ s.match(/\S.+(군|면)/g)
console.log(s.match(/[가-기]/g)); // [ '강', '고', '군' ]   cf.
console.log("영나수ㄴㅃㅅㄲ".match(/[ㄴ나-닣]/g));
console.log(s.match(/[가-기]\S/g)); // [ '강원', '고성' ]  cf. '영강수ㄴㅃㅅㄲ'.match(/[ㄱㄲ가-깋]/g)
console.log(/^http(s?):\/\/.+\..+$/.test("http://j.k"));

console.log(
  "1234-2323-2323-2323".replace(/^(\d{4}-\d{2})(\d{2}-\d{4})/, "$1##-####")
);

//문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.
let 가 = "가".charCodeAt(0);
let 나 = "나".charCodeAt(0);
let ㄱ = "ㄱ".charCodeAt(0);
let ㅎ = "ㅎ".charCodeAt(0);
let 훈민정음 = "";
for (let i = 가; i < 나; i++) {
  훈민정음 +=
    String.fromCharCode(i) + `:${((i - 가) % 28).toString().padStart(3)}\t\t`;
}
const JAUM_ALPHA_NUMS = [
  108, 76, 109, 77, 110, 78, 114, 82, 48, 49, 51, 54, 55, 56,
]; // [..."lLmMnNrR013678"].map((s) => s.charCodeAt(0));
const isEndJaum = (s) => {
  // 글자의 마지막 부분을 가져옴
  let value = s.charCodeAt(s.length - 1);
  // lLmMnNrR013678는 자음으로끝남
  if (JAUM_ALPHA_NUMS.includes(value)) return true;
  // ㄱ ~ ㅎ는 참
  if (value >= ㄱ && value <= ㅎ) return true;
  // 한글아니면 반환
  if (!s.match(/[가-힣]/)) {
    return false;
  }
  // 종성인지 확인
  let last = (value - 가) % 28;
  // 받침있으면 을 없으면 를 반환
  return last > 0 ? true : false;
};

console.log("강원도", isEndJaum("강원도")); // false
console.log("바라당", isEndJaum("바라당")); // true
console.log("ㅜㅜ", isEndJaum("ㅜㅜ")); // false
console.log("ㅜㅜㄱ", isEndJaum("ㅜㅜㄱ")); // true
console.log("케잌", isEndJaum("케잌")); // true
console.log("점수 A", isEndJaum("점수 A")); // false   cf. isEndJaum('알파벳L')은 true
console.log("24", isEndJaum("24")); // false   cf. isEndJaum('23')은 true 136780
console.log("23", isEndJaum("23")); // false   cf. isEndJaum('23')은 true 136780

//조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.
const iga = (s) => (isEndJaum(s) ? "이" : "가");
const eunun = (s) => (isEndJaum(s) ? "은" : "는");
const eulul = (s) => (isEndJaum(s) ? "을" : "를");
const ilang = (s) => (isEndJaum(s) ? "이랑" : "랑");

console.log(`강원도${iga("강원도")}`); // 고성군이  cf. `강원도${iga('강원도')}` ⇒ 강원도가
console.log(`강원도${eunun("강원도")}`); // 고성군은  cf. `강원도${eunun('강원도')}` ⇒ 강원도는
console.log(`강원도${eulul("강원도")}`); // 고성군을  cf. `강원도${eulul('강원도')}` ⇒ 강원도를
console.log(`강원도${ilang("강원도")}`); // 고성군을  cf. `강원도${eulul('강원도')}` ⇒ 강원도
console.log(`고성군${iga("고성군")}`); // 고성군이  cf. `강원도${iga('강원도')}` ⇒ 강원도가
console.log(`고성군${eunun("고성군")}`); // 고성군은  cf. `강원도${eunun('강원도')}` ⇒ 강원도는
console.log(`고성군${eulul("고성군")}`); // 고성군을  cf. `강원도${eulul('강원도')}` ⇒ 강원도를
console.log(`고성군${ilang("고성군")}`); // 고성군을  cf. `강원도${eulul('강원도')}` ⇒ 강원도

//초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.
let sarr = [
  "강원도 고성군",
  "고성군 토성면",
  "토성면 북면",
  "북면",
  "김1수",
  "ㅂㅁ",
  "ㅇㅅㅇ",
  "양세영",
];
const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하";
const 깋닣딯 = "깋낗닣딯띻맇밓빟삫싷앃잏짛찧칳킿팋핗힣";
const searchByKoreanInitialSound = (sarr, initial) => {
  const rex = new RegExp(
    [...initial]
      .map((is) => {
        const idx = ㄱㄴㄷ.indexOf(is);
        if (idx == -1) return is;
        return `[${ㄱㄴㄷ[idx]}${가나다[idx]}-${깋닣딯[idx]}]`;
      })
      .join("")
  );
  console.log(rex);
  return sarr.filter((item) => item.match(rex));
};
const searchByKoreanInitialSound2 = (sarr, initial) => {
  const rex = new RegExp(
    initial
      .replaceAll("ㄱ", "[ㄱ가-깋]")
      .replaceAll("ㄲ", "[ㄲ까-낗]")
      .replaceAll("ㄴ", "[ㄴ나-닣]")
      .replaceAll("ㄷ", "[ㄷ다-딯]")
      .replaceAll("ㄸ", "[ㄸ따-띻]")
      .replaceAll("ㄹ", "[ㄹ라-맇]")
      .replaceAll("ㅁ", "[ㅁ마-밓]")
      .replaceAll("ㅂ", "[ㅂ바-빟]")
      .replaceAll("ㅃ", "[ㅃ빠-삫]")
      .replaceAll("ㅅ", "[ㅅ사-싷]")
      .replaceAll("ㅆ", "[ㅆ싸-앃]")
      .replaceAll("ㅇ", "[ㅇ아-잏]")
      .replaceAll("ㅈ", "[ㅈ자-짛]")
      .replaceAll("ㅉ", "[ㅉ짜-찧]")
      .replaceAll("ㅊ", "[ㅊ차-칳]")
      .replaceAll("ㅋ", "[ㅋ카-킿]")
      .replaceAll("ㅌ", "[ㅌ타-팋]")
      .replaceAll("ㅍ", "[ㅍ파-핗]")
      .replaceAll("ㅎ", "[ㅎ하-힣]")
  );
  return sarr.filter((item) => item.match(rex));
};

console.log(searchByKoreanInitialSound(sarr, "ㄱㅅㄱ"));
console.log(searchByKoreanInitialSound(sarr, "ㅌㅅㅁ"));
console.log(searchByKoreanInitialSound(sarr, "ㅂㅁ"));
console.log(searchByKoreanInitialSound(sarr, "ㅍㅁ"));
console.log(searchByKoreanInitialSound(sarr, "ㄱ1ㅅ"));
console.log(searchByKoreanInitialSound(sarr, "ㅇㅅㅇ"));

//문자열 str에서 대문자만 골라 소문자로 변환하세요.
const upperToLower = (s) => s.replace(/[A-Z]/g, (s) => `*${s.toLowerCase()}*-`);
console.log(upperToLower("Senior Coding Learning JS"));
// ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

//전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
const telfmt = (str) => {
  const len = str?.length;
  if (len < 7) return str;
  if (len == 8) return `${str.substring(0, len - 4)}-${str.substring(len - 4)}`;
  const a = str.startsWith("02") ? 2 : len <= 11 ? 3 : 4;
  const b = len - 4 - a;
  const regex = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{${4}})`);
  return str.replace(regex, "$1-$2-$3");
};
console.log(telfmt("0101234567")); // '010-123-4567'
console.log(telfmt("01012345678")); // '010-1234-5678'
console.log(telfmt("0212345678")); // '02-1234-5678'
console.log(telfmt("021234567")); // '02-123-4567'
console.log(telfmt("0331234567")); // '033-123-4567'
console.log(telfmt("15771577")); // '1577-1577'
console.log(telfmt("07012341234")); // '070-1234-1234'
console.log(telfmt("050712341234")); // '070-1234-1234'

import assert from "node:assert";
assert.strictEqual(telfmt("0101234567"), "010-123-4567");
assert.strictEqual(telfmt("01012345678"), "010-1234-5678");
assert.strictEqual(telfmt("0212345678"), "02-1234-5678");
assert.strictEqual(telfmt("021234567"), "02-123-4567");
assert.strictEqual(telfmt("0331234567"), "033-123-4567");
assert.strictEqual(telfmt("15771577"), "1577-1577");
assert.strictEqual(telfmt("07012341234"), "070-1234-1234");
assert.strictEqual(telfmt("050712341234"), "0507-1234-1234");
