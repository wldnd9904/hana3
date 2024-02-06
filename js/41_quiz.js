const postListURL = (userID) =>
  `https://jsonplaceholder.typicode.com/posts?userId=${userID}`;
const commentListURL = (postID) =>
  `https://jsonplaceholder.typicode.com/posts/${postID}/comments`;
const postURL = (postID) =>
  `https://jsonplaceholder.typicode.com/posts/${postID}`;

// const fetchJson = (url) => (async {
//   return await fetch(url)
//     .then((data) => data.json())
//     .then((json) => console.log(json));;
const getComments = async (postID) =>
  fetch(commentListURL(postID))
    .then((data) => data.json())
    .then((json) => json.map((object) => ({ ...object })));

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

//비동기 출력
const getPosts2 = async (userID) => {
  const posts = await fetch(postListURL(userID)).then((data) => data.json());
  for (let i in posts) {
    console.log({ ...posts[i], comments: await getComments(posts[i].id) });
  }
};

//  1번 유저의 게시글 목록과 댓글을 리턴하는 함수를 작성하시오.
// - 1번 유저의 글목록: https://jsonplaceholder.typicode.com/posts?userId=1
// - 댓글 목록: https://jsonplaceholder.typicode.com/posts/<postId>/comments
getPosts2(1);
