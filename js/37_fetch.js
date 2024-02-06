// under node v18
// import fetch from 'node-fetch';
// browser에서는 생략(자체제공)
// node> npm i node-fetch

const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";
const sampleUrl2 = "https://jsonplaceholder.typicode.com/users/2";
const sampleUrl3 = "https://jsonplaceholder.typicode.com/users/3";

/*
const isAsyncWait = true;

if (isAsyncWait) {
  const res = await fetch(sampleUrl);
  const data = await res.json();
  console.log(data);
}

fetch(sampleUrl)
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

const promiFetch = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject)
  );
const asyncFetch = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const data = await promiFetch(sampleUrl);
console.log("data: ", data);
const data2 = await asyncFetch(sampleUrl);
console.log("data: ", data2);
const rets = [sampleUrl, sampleUrl2, sampleUrl3].map(async (url) =>
  asyncFetch(url)
);
console.log(rets);
