import React from "react";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div>
      <h1>This is auth layout</h1>
      <Outlet></Outlet>
    </div>
  );
}
