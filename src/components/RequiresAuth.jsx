import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequiresAuth = () => {
  const { authState } = useContext(AuthContext);
  const { token } = authState;
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
