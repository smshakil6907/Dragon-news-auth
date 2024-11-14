import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

export default function HomeLayout() {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-4 mt-5">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
}
