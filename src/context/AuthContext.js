import { createContext, useEffect, useReducer } from "react";
import { authInitial, authReducer } from "../reducers/authReducers";
import {
  editUser,
  login,
  signup,
} from "../utils/authentication/authentication";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext({ user: "", token: "" });

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitial);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    const response = await login(user);
    localStorage.setItem("token", response.encodedToken);
    localStorage.setItem("user", JSON.stringify(response.foundUser));
    authDispatch({
      type: "LOGIN",
      payload: {
        user: response.foundUser,
        token: response.encodedToken,
      },
    });
    if (location?.state === null) {
      navigate("/");
    } else {
      navigate(location?.state?.from?.pathname);
    }
  };

  const handleSignup = async (user) => {
    const response = await signup(user);
    window.localStorage.setItem("token", JSON.stringify(response.encodedToken));
    authDispatch({
      type: "SIGNUP",
      payload: {
        user: response.createdUser,
        token: response.encodedToken,
      },
    });
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  const handleEdit = async (user, token) => {
    const response = await editUser(user, token);
    authDispatch({
      type: "EDIT",
      payload: {
        user: response,
        token: token,
      },
    });
  };
  const value = {
    authState,
    handleLogin,
    handleSignup,
    handleLogout,
    handleEdit,
  };

  // console.log(authState);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
