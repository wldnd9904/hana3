//문자열이 한글 자음으로 끝나는지 체크하는 함수
let 가 = "가".charCodeAt(0);
let ㄱ = "ㄱ".charCodeAt(0);
let ㅎ = "ㅎ".charCodeAt(0);
const JAUM_ALPHA_NUMS = [
  108, 76, 109, 77, 110, 78, 114, 82, 48, 49, 51, 54, 55, 56,
]; // [..."lLmMnNrR013678"].map((s) => s.charCodeAt(0));
export const isEndJaum = (s) => {
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
//조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수
export const iga = (s) => (isEndJaum(s) ? "이" : "가");
export const eunun = (s) => (isEndJaum(s) ? "은" : "는");
export const eulul = (s) => (isEndJaum(s) ? "을" : "를");
export const ilang = (s) => (isEndJaum(s) ? "이랑" : "랑");
//초성 검색을 하는 search함수
const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하";
const 깋닣딯 = "깋낗닣딯띻맇밓빟삫싷앃잏짛찧칳킿팋핗힣";
export const searchByInitialSound = (sarr, initial) => {
  const rex = new RegExp(
    [...initial]
      .map((is) => {
        const idx = ㄱㄴㄷ.indexOf(is);
        if (idx == -1) return is;
        return `[${ㄱㄴㄷ[idx]}${가나다[idx]}-${깋닣딯[idx]}]`;
      })
      .join("")
  );
  return sarr.filter((item) => item.match(rex));
};
const searchByInitialSound2 = (sarr, initial) => {
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

//문자열 str에서 대문자만 골라 소문자로 변환하세요.
//const upperToLower = (s) => s.replace(/[A-Z]/g, (s) => `*${s.toLowerCase()}*-`);
//console.log(upperToLower("Senior Coding Learning JS"));
// ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-'

//전화번호를 정확한 형식으로 출력하는 함수
export const telfmt = (str) => {
  const len = str?.length;
  if (len < 7) return str;
  if (len == 8) return `${str.substring(0, len - 4)}-${str.substring(len - 4)}`;
  const a = str.startsWith("02") ? 2 : len <= 11 ? 3 : 4;
  const b = len - 4 - a;
  const regex = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{${4}})`);
  return str.replace(regex, "$1-$2-$3");
};
