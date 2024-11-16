import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
  return (
    <div className="bg-base-300 font-poppins">
      <div className="py-3 w-11/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
