interface Naver {
  userid: number;
  username: string;
  email: string;
}
interface Kakao {
  userid: number;
  userName: string;
  kakaotalk: string;
  email: string;
}

// interface SnsUser {
//   [idx: string]: number | string;
//   userid: number;
//   email: string;
// }

interface SnsUser {
  username?: string;
  userName?: string;
  kakaotalk?: string;
  userid: number;
  email: string;
}
// 다음 코드에 오류가 없으면 통과!
const naverUser: SnsUser = {
  userid: 1,
  username: "HH",
  email: "abc@naver.com",
};
const kakaoUser: SnsUser = {
  userid: 1,
  userName: "HH",
  kakaotalk: "HH",
  email: "abc@hanmail.net",
};

console.log(Reflect.ownKeys(naverUser));
