import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoIcon from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-2">
      <div></div>
      <div className="space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <img src={logoIcon} alt="" />
        </div>
        <Link to="/auth/login" className="btn btn-neutral">
          Login
        </Link>
      </div>
    </div>
  );
}
