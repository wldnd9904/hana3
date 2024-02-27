import { Outlet, useNavigate } from "react-router-dom";
import { Post } from "../type";
import { useEffect, useMemo, useState } from "react";
import { useSession } from "../contexts/session-context";
import { useFetch } from "../hooks/fetch";
const BASE_URL = "https://koreanjson.com";
const postURL = (id: number) => `${BASE_URL}/posts?userId=${id}`;

function PostLayout() {
  const [currPost, setCurrPost] = useState<Post>();
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();
  const {
    session: { loginUser },
  } = useSession();
  const url = useMemo(
    () => (loginUser ? postURL(loginUser!.id) : ""),
    [loginUser, loginUser?.id]
  );
  const { data, error, isLoading } = useFetch<Post[]>(url);
  useEffect(() => {
    if (data) setPosts(data);
  }, [data]);
  const goPost = (post: Post) => {
    setCurrPost(post);
    navigate(`/posts/${post.id}`);
  };

  if (isLoading) return <span>Loading...</span>;
  return (
    <>
      <div className="flex flex-row">
        <ul className="w-1/2 ">
          {posts?.map((post) => (
            <li className="p-0" key={post.id} onClick={() => goPost(post)}>
              <button className="bg-white text-black  text-left text-ellipsis overflow-hidden text-nowrap max-w-md">
                #{post.id} {post.title}
              </button>
            </li>
          ))}
        </ul>
        <Outlet context={{ post: currPost }} />
      </div>
    </>
  );
}
export default PostLayout;
