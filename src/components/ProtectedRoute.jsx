import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === "loading") {
    return <div>Loading...</div>; // Or your loading component
  }

  if (isAuthenticated === false) {
    return <Navigate to="/signup" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
