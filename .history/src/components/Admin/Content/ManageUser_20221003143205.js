import React from "react";
import ModalExample from "./ModalExample";

function ManageUser(props) {
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          table users
          <ModalExample />
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
