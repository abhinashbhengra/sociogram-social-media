import "./sign-up.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const { handleSignup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSignup(user);
  };

  const handleDummyDetails = () => {
    setUser((curr) => ({
      ...curr,
      firstName: "Adarsh",
      lastName: "Balak",
      username: "adarshbalak",
      password: "adarsh@123",
    }));
  };

  return (
    <div className="signup-main-container">
      <h1 style={{ color: "#fff" }}>Sociogram</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={user.firstName}
            onChange={(e) =>
              setUser((curr) => ({ ...curr, firstName: e.target.value }))
            }
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={user.lastName}
            onChange={(e) =>
              setUser((curr) => ({ ...curr, lastName: e.target.value }))
            }
          />
        </div>
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

        <button type="submit">Sign up</button>
        <div>
          <p>
            Already have account ?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "#0098fd", cursor: "pointer" }}
            >
              login
            </span>
          </p>
          <p onClick={handleDummyDetails} style={{ cursor: "pointer" }}>
            Fill Dummy Details
          </p>
        </div>
      </form>
    </div>
  );
};
