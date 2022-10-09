import React, { useState } from "react";
import SideBar from "./SideBar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  FaBars,
} from "react-icons/fa";
import "./Admin.scss";
function Admin(props) {
  const [collapsed, setColappsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header"></div>
        <div className="admin-main">admin</div>
        <FaBars onClick={() => setColappsed(!collapsed)} />
        admin
      </div>
    </div>
  );
}

export default Admin;
