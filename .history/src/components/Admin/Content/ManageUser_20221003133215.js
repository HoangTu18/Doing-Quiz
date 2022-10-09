import React from "react";

function ManageUser(props) {
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table users</div>
      </div>
    </div>
  );
}

export default ManageUser;
