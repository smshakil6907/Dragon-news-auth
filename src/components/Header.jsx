import moment from "moment";
import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-2">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2 className="text-gray-500 font-semibold">
        Journalism without fear and favour
      </h2>
      <p className="text-gray-500s">{moment().format("dddd, MMMM Do YYYY,")}</p>
    </div>
  );
}
