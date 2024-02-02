s = "강원도 고성군 토성면 북면";
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
