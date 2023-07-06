import "./login.css";
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
    <div className="login-main-container">
      <h1 style={{ color: "#fff" }}>Sociogram</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            value={user.username}
            onChange={(e) =>
              setUser((curr) => ({ ...curr, username: e.target.value }))
            }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) =>
              setUser((curr) => ({ ...curr, password: e.target.value }))
            }
          />
        </div>

        <button type="submit">Log In</button>
        <div className="signup-guest-container">
          <p>
            Don't have account ?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ color: "#0098fd", cursor: "pointer" }}
            >
              Sign up
            </span>
          </p>
          <p onClick={handleGuestLogin} style={{ cursor: "pointer" }}>
            Add Guest Credentials
          </p>
        </div>
      </form>
    </div>
  );
};
