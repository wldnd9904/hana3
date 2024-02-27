import { useEffect, useMemo, useState } from "react";
import { useSession } from "../contexts/session-context";
import { FaAngleUp, FaAngleRight } from "react-icons/fa";
import useToggle from "../hooks/toggle";
import { Post } from "../type";
import { useFetch } from "../hooks/fetch";
import clsx from "clsx";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import PostItem from "./PostItem";

const BASE_URL = "https://koreanjson.com";
const postURL = (id: number) => `${BASE_URL}/posts?userId=${id}`;

export default function Posts() {
  const navigate = useNavigate();

  const location = useLocation();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({});
  const {
    session: { loginUser },
  } = useSession();
  useEffect(() => {
    // if (!loginUser) navigate("/login");
  }, [loginUser]);
  useEffect(() => {
    console.log(id);
    console.log(location);
    console.log(searchParams.get("sdf"));
  }, []);
  const [posts, setPosts] = useState<Post[]>([]);
  const url = useMemo(
    () => (loginUser ? postURL(loginUser!.id) : ""),
    [loginUser, loginUser?.id]
  );
  const { data, error, isLoading } = useFetch<Post[]>(url);
  useEffect(() => {
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
              <PostItem key={post.id} postID={post.id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
