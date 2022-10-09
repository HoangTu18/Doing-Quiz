import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import "./Admin.scss";
import SideBar from "./SideBar";
function Admin(props) {
  const [collapsed, setColappsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaBars onClick={() => setColappsed(!collapsed)} />
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
