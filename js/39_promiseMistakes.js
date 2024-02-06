//불필요한 Promise 객체 반환! ← 함수가 비동기인지 알고 코딩하자!
{
  const myFetch = () =>
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
      res.json()
    );
  console.log((await myFetch()).name);
}
//Promise 결과 반환
{
  const promiseFn = (id = 1) =>
    new Promise((resolve, reject) => {
      //console.log("promise>>", id);
      if (id < 5) resolve(id + 1);
      else reject(new Error("reject>>" + id));
    });
  let result;
  promiseFn().then((res) => {
    result = res;
    console.log(result);
  });
}
//Promise 오류 처리
// 단, next, getRow는 동기 함수!
// https://npmtrends.com/mysql-vs-mysql2

const getAllUsers = (sql) =>
  new Promise((resolve, reject) =>
    query.execute(sql, (err, rs) => {
      if (err) reject(err);

      const results = [];
      while (rs.next()) results.push(rs.getRow());

      resolve(results);
    })
  );
// execute(sqlStr, cb) {
//  conn.query(sqlStr)
//   .then(res => cb(null, res))
//   .catch(err => cb(err))
// }

import { rand } from "./utils/index.js";
const randTime = () =>
  new Promise((resolve) => {
    const sec = rand(1, 4) * 500;
    console.log(sec);
    setTimeout(() => {
      console.log(sec + "done");
      return resolve(sec);
    }, sec);
  });
