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

console.log("ㄴㅇ".charCodeAt(0));

//문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.

const isEndJaum = (s) => {
  // 글자의 마지막 부분을 가져옴
  let value = s.charCodeAt(s.length - 1);
  // 한글아니면 반환
  if (!s.match(/[가-힣]/)) {
    return false;
  }
  // 종성인지 확인
  let last = (value - 0xac00) % 28;
  // 받침있으면 을 없으면 를 반환
  return last > 0 ? true : false;
};
console.log(isEndJaum("강원도")); // false
console.log(isEndJaum("바라당")); // true
console.log(isEndJaum("ㅜㅜ")); // false
console.log(isEndJaum("케잌")); // true
console.log(isEndJaum("점수 A")); // false   cf. isEndJaum('알파벳L')은 true
console.log(isEndJaum("24")); // false   cf. isEndJaum('23')은 true 136780

//조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.
//`고성군${iga("고성군")}`; // 고성군이  cf. `강원도${iga('강원도')}` ⇒ 강원도가
//`고성군${eunun("고성군")}`; // 고성군은  cf. `강원도${eunun('강원도')}` ⇒ 강원도는
//`고성군${eulul("고성군")}`; // 고성군을  cf. `강원도${eulul('강원도')}` ⇒ 강원도를
//(추가) ~이어야/여야, ~이랑/랑
//초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.
let sarr = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];
const searchByKoreanInitialSound = (sarr, initial) =>
  sarr.filter((item) =>
    item.match(
      initial
        .replaceAll("ㄱ", "[가-깋]")
        .replaceAll("ㄲ", "[까-낗]")
        .replaceAll("ㄴ", "[나-닣]")
        .replaceAll("ㄷ", "[다-딯]")
        .replaceAll("ㄸ", "[따-띻]")
        .replaceAll("ㄹ", "[라-맇]")
        .replaceAll("ㅁ", "[마-밓]")
        .replaceAll("ㅂ", "[바-빟]")
        .replaceAll("ㅃ", "[빠-삫]")
        .replaceAll("ㅅ", "[사-싷]")
        .replaceAll("ㅆ", "[싸-앃]")
        .replaceAll("ㅇ", "[아-잏]")
        .replaceAll("ㅈ", "[자-짛]")
        .replaceAll("ㅉ", "[짜-찧]")
        .replaceAll("ㅊ", "[차-칳]")
        .replaceAll("ㅋ", "[카-킿]")
        .replaceAll("ㅌ", "[타-팋]")
        .replaceAll("ㅍ", "[파-핗]")
        .replaceAll("ㅎ", "[하-힣]")
    )
  );
console.log(searchByKoreanInitialSound(sarr, "ㄱㅅㄱ"));
console.log(searchByKoreanInitialSound(sarr, "ㅌㅅㅁ"));
console.log(searchByKoreanInitialSound(sarr, "ㅂㅁ"));
console.log(searchByKoreanInitialSound(sarr, "ㅍㅁ"));
console.log(searchByKoreanInitialSound(sarr, "ㄱ1ㅅ"));

//문자열 str에서 대문자만 골라 소문자로 변환하세요.
const upperToLower = (s) => s.toLowerCase();
console.log(upperToLower("Senior Coding Learning JS"));
// ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

//전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
const telfmt = () => {};
telfmt("0101234567"); // '010-123-4567'
telfmt("01012345678"); // '010-1234-5678'
telfmt("0212345678"); // '02-1234-5678'
telfmt("021234567"); // '02-123-4567'
telfmt("0331234567"); // '033-123-4567'
telfmt("15771577"); // '1577-1577'
telfmt("07012341234"); // '070-1234-1234'
