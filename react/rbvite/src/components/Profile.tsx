import { useSession } from "../contexts/session-context";
import Posts from "./Post/Posts";

const Profile = () => {
  const { session, logout } = useSession();
  return (
    <div id="Profile">
      <div className="title">Profile</div>
      <span style={{ fontWeight: "bold" }}>{`#${session.loginUser!.id}: ${
        session.loginUser!.name
      }`}</span>
      <span>{`(Age: ${session.loginUser!.age}, Addr: ${
        session.loginUser!.address
      })`}</span>
      <button onClick={logout}>Logout</button>
      <Posts />
    </div>
  );
};
export default Profile;
