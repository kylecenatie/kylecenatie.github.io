import React from "react";
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";

const Layout = () => {
      return (
            <>
            <div>Here is the button</div>
            <Navbar />
            <div>
            <Outlet />
            </div>
            </>
      )
}
export default Layout;