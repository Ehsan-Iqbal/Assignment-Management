import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className=" mt-[63px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
