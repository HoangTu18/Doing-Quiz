import React from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
function ManageUser(props) {
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="users-content">
        <div className="btn-add-new btn btn-primary">
          <button>Add new users</button>
        </div>
        <div className="table-users-container">table users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
}

export default ManageUser;
