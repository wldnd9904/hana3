import { useSession } from "../contexts/session-context";

const Profile = () => {
  const { session, logout } = useSession();
  return (
    <>
      <span style={{ fontWeight: "bold" }}>{`${session.loginUser!.name}(${
        session.loginUser!.age
      })`}</span>
      <span>{`(ID:${session.loginUser!.id}, Addr:${
        session.loginUser!.address
      })`}</span>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Profile;
