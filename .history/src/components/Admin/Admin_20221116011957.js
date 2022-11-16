import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import "./Admin.scss";
import SideBar from "./SideBar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-toastify/dist/ReactToastify.css";
import Language from "../Header/Language";
import NavDropdown from "react-bootstrap/NavDropdown";
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
          <NavDropdown title="Settings" id="basic-nav-dropdown">
            <NavDropdown.Item>Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLogout()}>
              Log out
            </NavDropdown.Item>
          </NavDropdown>

          <Language />
        </div>
        <div className="admin-main">
          <PerfectScrollbar>
            <Outlet />
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
}

export default Admin;
