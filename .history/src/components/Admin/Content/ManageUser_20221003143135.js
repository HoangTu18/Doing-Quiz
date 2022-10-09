import React from "react";
import Example from "./Modal";

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
          <Example />
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
