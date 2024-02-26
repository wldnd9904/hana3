import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex-row flex justify-between border-blue-500 border p-1 mb-10">
      <Link to="/" replace>
        Home
      </Link>
      <Link to="/login">Login</Link>
      <Link to="/my">My</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/hello">About</Link>
    </nav>
  );
};
export default Nav;
