import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";


export const RequiresAuth = ({ children }) => {
  const { auth } = useContext(AuthenticationContext);
  return <>{auth.isLoggedIn ? children : <Navigate to="/login" />}</>;
};
