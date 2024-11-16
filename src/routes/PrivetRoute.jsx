import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../components/provider/AuthProvider";

export default function PrivetRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
}
