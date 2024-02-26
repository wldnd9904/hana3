import { useEffect, useMemo, useState } from "react";
import { useSession } from "../contexts/session-context";
import { FaAngleUp, FaAngleRight } from "react-icons/fa";
import useToggle from "../hooks/toggle";
import { Post } from "../type";
import { useFetch } from "../hooks/fetch";

const BASE_URL = "https://koreanjson.com";
const postURL = (id: number) => `${BASE_URL}/posts?userId=${id}`;

const PostItem = ({ post }: { post: Post }) => {
  const [open, toggleOpen] = useToggle();
  return (
    <li style={{ textAlign: "start" }}>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <span>
            #{post.id}: {post.title}
          </span>
          <button
            style={{
              backgroundColor: "white",
              color: "gray",
              padding: "0px",
            }}
            onClick={toggleOpen}
          >
            {open ? <FaAngleUp /> : <FaAngleRight />}
          </button>
        </div>
        {open && <div>{post.content}</div>}
      </div>
    </li>
  );
};

export default function Posts() {
  const {
    session: { loginUser },
  } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const url = useMemo(() => postURL(loginUser!.id), [loginUser?.id]);
  const { data, error, isLoading } = useFetch<Post[]>(url);
  useEffect(() => {
    console.log(data);
    if (data) setPosts(data);
  }, [data]);
  return (
    <div id="Posts">
      {isLoading || error ? (
        error ? (
          <span>error:{error}</span>
        ) : (
          <span>로딩중...</span>
        )
      ) : (
        <>
          <div className="title">Posts</div>
          {!posts.length && <h4>게시글이 없습니다.</h4>}
          <ul className="un-list">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
