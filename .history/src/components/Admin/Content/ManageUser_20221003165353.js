import React, { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
function ManageUser(props) {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="users-content">
        <div className="btn-add-new ">
          <button className="btn btn-primary">
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">table users</div>
        <ModalCreateUser show={showModalCreateUser}>
      </div>
    </div>
  );
}

export default ManageUser;
