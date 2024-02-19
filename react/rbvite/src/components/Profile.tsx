// src/components/Profile.tsx
import { LoginUser } from "../App";

type Props = {
  loginUser: LoginUser;
  logout: () => void;
};

const Profile = ({ loginUser, logout }: Props) => {
  return (
    <>
      <span
        style={{ fontWeight: "bold" }}
      >{`${loginUser.name}(${loginUser.age})`}</span>
      <span>{`(ID:${loginUser.id}, Addr:${loginUser.address})`}</span>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Profile;
