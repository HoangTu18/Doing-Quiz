import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
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
        <div className="admin-main">admin</div>
      </div>
    </div>
  );
}

export default Admin;
