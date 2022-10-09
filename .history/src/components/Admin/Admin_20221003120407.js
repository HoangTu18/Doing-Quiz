import React from "react";
import SideBar from "./SideBar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import "./Admin.scss";
function Admin(props) {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>
      <div className="admin-content">admin</div>
    </div>
  );
}

export default Admin;
