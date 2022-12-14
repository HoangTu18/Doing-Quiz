import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import sidebarBg from "../../assets/bg2.jpg";
import { MdDashboard } from "react-icons/md";
import { DiReact } from "react-icons/di";
import "./SideBar.scss";
function SideBar({ image, collapsed, toggled, handleToggleSidebar }) {
  const navigate = useNavigate();
  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <DiReact size={"3em"} color={"00bfff"} />
          <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Hỏi Dân IT
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>
            Dashboard <Link to="/admins" />
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu icon={<FaGem />} title="Features">
            <MenuItem>
              Quản Lí User
              <Link to="/admins/manage-users" />
            </MenuItem>
            <MenuItem>
              <Link to="/admins/manage-quizzes" /> Quản Lí Bài Quiz
            </MenuItem>
            <MenuItem>
              <Link to="/admins/manage-questions" /> Quản Lí Câu Hỏi
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://www.facebook.com/phamhoangtu03136/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              viewSource
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default SideBar;
