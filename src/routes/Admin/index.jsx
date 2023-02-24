import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar";

function Admin() {
  return (
    <div className="flex h-auto min-h-screen items-stretch">
      <Navbar />
      <div className="ml-[72px] w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
