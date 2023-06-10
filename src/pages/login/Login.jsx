import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { authState, handleLogin } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  const handleGuestLogin = () => {
    setUser((curr) => ({
      ...curr,
      username: "abhinashbhengra",
      password: "abhinashbhengra123",
    }));
  };
  console.log(authState);
  console.log("token", authState.user);
  return (
    <>
      <h1>This is Login page.</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="username"
          value={user.username}
          onChange={(e) =>
            setUser((curr) => ({ ...curr, username: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) =>
            setUser((curr) => ({ ...curr, password: e.target.value }))
          }
        />
        <button type="submit">Login</button>
        <p>
          Don't have account ? <span>Sign up</span>
        </p>
        <p onClick={handleGuestLogin}>Add Guest Credentials</p>
      </form>
    </>
  );
};
