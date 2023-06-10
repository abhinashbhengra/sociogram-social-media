import { createContext, useReducer } from "react";
import { authInitial, authReducer } from "../reducers/authReducers";
import { login, signup } from "../utils/authentication/authentication";

export const AuthContext = createContext({ user: "", token: "" });

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitial);
  const handleLogin = async (user) => {
    const response = await login(user);
    authDispatch({
      type: "LOGIN",
      payload: {
        user: response.foundUser,
        token: response.encodedToken,
      },
    });
  };

  const handleSignup = async (user) => {
    const response = await signup(user);
    authDispatch({
      type: "SIGNUP",
      payload: {
        user: response.createdUser,
        token: response.encodedToken,
      },
    });
  };
  const value = { authState, handleLogin, handleSignup };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
