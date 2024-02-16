// src/components/Profile.tsx
import { LoginUser } from "../App";

type Props = {
  loginUser: LoginUser;
  logout: () => void;
};

const Profile = ({ loginUser, logout }: Props) => {
  return (
    <>
      <div>User Name: {loginUser.name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Profile;
