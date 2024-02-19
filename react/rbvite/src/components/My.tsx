// src/components/My.tsx
import { Session } from "../App";
import Login from "./Login";
import Profile from "./Profile";

type Props = {
  session: Session;
  login: (id: number, name: string, address: string, age: number) => void;
  logout: () => void;
  removeItem: (id: number) => void;
};

const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
}: Props) => {
  return (
    <div id="My">
      <div className="title">My</div>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul>
        {loginUser &&
          cart.map(({ id, name, price }) => (
            <li key={id}>
              {name}({price})
              <button
                onClick={() => {
                  removeItem(id);
                }}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default My;
