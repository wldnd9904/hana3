import clsx from "clsx";
import { FaAngleUp, FaAngleRight } from "react-icons/fa";
import useToggle from "../hooks/toggle";
import { Post } from "../type";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/fetch";
import { useParams } from "react-router-dom";

const DefaultPost: Post = {
  userId: 0,
  id: 0,
  title: "",
};

function PostItem({ postID }: { postID?: number }) {
  const [post, setPost] = useState<Post>(DefaultPost);
  const [open, toggleOpen] = useToggle();
  const { id } = useParams();
  const { data, error, isLoading } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postID ?? id ?? -1}`
  );
  useEffect(() => {
    if (data) setPost(data);
  }, [data]);
  return (
    <li
      className={clsx(open && "border", "border-green-300")}
      style={{ textAlign: "start" }}
    >
      <div style={{ width: "100%" }}>
        {isLoading || error ? (
          <span>{error ? error : "Loading..."}</span>
        ) : (
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
              {!id && (open ? <FaAngleUp /> : <FaAngleRight />)}
            </button>
          </div>
        )}
        {(open || id) && <div>{post.body}</div>}
      </div>
    </li>
  );
}

export default PostItem;
