import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Layout from "../layout/Layout";

const PublicRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === "loading") {
    return <div>Loading...</div>; // Or your loading component
  }

  if (isAuthenticated === true) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
