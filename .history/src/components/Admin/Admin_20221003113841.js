import React from "react";
import SideBar from "./SideBar";

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
