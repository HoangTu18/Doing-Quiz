import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import TableUser from "./TableUser";
function ManageUser(props) {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="users-content">
        <div className="btn-add-new ">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
}

export default ManageUser;
