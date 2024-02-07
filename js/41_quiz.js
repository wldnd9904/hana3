const postListURL = (userID) =>
  `https://jsonplaceholder.typicode.com/posts?userId=${userID}`;
const commentListURL = (postID) =>
  `https://jsonplaceholder.typicode.com/posts/${postID}/comments`;
const postURL = (postID) =>
  `https://jsonplaceholder.typicode.com/posts/${postID}`;

const getComments = (postID) =>
  fetch(commentListURL(postID)).then((data) => data.json());

const getCommentsWithLog = (postID) =>
  fetch(commentListURL(postID))
    .then((data) => {
      console.log("comments fetch done:", postID);
      return data.json();
    })
    .then((data) => {
      console.log("> comments parse done:", postID);
      return data;
    });

const getPosts = async (userID) => {
  const posts = await fetch(postListURL(userID)).then((data) => data.json());
  const commentLists = await Promise.allSettled(
    posts.map((post) => getComments(post.id))
  );
  return posts.map((post, idx) => ({
    ...post,
    comments: commentLists[idx].value,
  }));
};

console.time("Time");
await getPosts(1);
console.timeEnd("Time");
// //  1번 유저의 게시글 목록과 댓글을 리턴하는 함수를 작성하시오.
// // - 1번 유저의 글목록: https://jsonplaceholder.typicode.com/posts?userId=1
// // - 댓글 목록: https://jsonplaceholder.typicode.com/posts/<postId>/comments
// // console.log(...(await getPosts(1)));

// //비동기 출력
// const getPosts2 = async (userID) => {
//   const posts = await fetch(postListURL(userID)).then((data) => data.json());
//   for (let i in posts) {
//     console.log({ ...posts[i], comments: await getComments(posts[i].id) });
//   }
// };
