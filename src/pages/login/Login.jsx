import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { authState, handleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

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
          Don't have account ?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
        <p onClick={handleGuestLogin}>Add Guest Credentials</p>
      </form>
    </>
  );
};
