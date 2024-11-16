import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoIcon from "../assets/user.png";
import { AuthContext } from "./provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center p-2">
      <div className="text-xl font-semibold">{user && user.email}</div>
      <div className="space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        {user && user ? (
          <button onClick={logOut} className="btn btn-neutral">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
