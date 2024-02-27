import { useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useLayoutEffect, useState } from "react";
import { useFetch } from "../../hooks/fetch";
import { Post } from "../../type";
const PostContainer = styled.div`
  border-radius: 10px;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  padding: 1em;
  margin: 10px;
  width: 50%;
  box-sizing: border-box;
`;

type Outlet = { post: Post };

function PostDetail() {
  const { post: postData } = useOutletContext<Outlet>();
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams();
  const { data } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  useEffect(() => {
    if (postData) setPost(postData);
    else if (data) setPost(data);
  }, [postData, data]);
  return (
    <PostContainer>
      <div className="font-bold mb-3">{post?.title}</div>
      <div className="text-sm">{post?.body}</div>
      <div className="text-sm">{post?.content}</div>
    </PostContainer>
  );
}
export default PostDetail;
