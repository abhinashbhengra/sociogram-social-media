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
    <>
      <h1>This is sign up page.</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={user.firstName}
          onChange={(e) =>
            setUser((curr) => ({ ...curr, firstName: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          onChange={(e) =>
            setUser((curr) => ({ ...curr, lastName: e.target.value }))
          }
        />
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
        <button type="submit">Sign up</button>
        <p>
          Already have account ?{" "}
          <span onClick={() => navigate("/login")}>login</span>
        </p>
        <p onClick={handleDummyDetails}>Dummy Details</p>
      </form>
    </>
  );
};
