import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";


export const RequiresAuth = ({ children }) => {
  const { userToken } = useContext(AuthenticationContext);
  return <>{userToken ? children : <Navigate to="/login" />}</>;
};
