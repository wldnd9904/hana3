import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex-row flex justify-between border-blue-500 border p-1 mb-10">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
        replace
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
      >
        Login
      </NavLink>
      <NavLink
        to="/my"
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
      >
        My
      </NavLink>
      <NavLink
        to="/posts"
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
      >
        Posts
      </NavLink>
      <NavLink
        to="/defertrans"
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
      >
        Defer
      </NavLink>
      <NavLink
        to="/sample"
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
      >
        sample
      </NavLink>
    </nav>
  );
};
export default Nav;
