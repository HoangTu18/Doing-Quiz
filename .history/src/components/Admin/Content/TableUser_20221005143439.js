import React from "react";
import { useState } from "react";

function TableUser(props) {
  const [listUsers, setListUsers] = useState([]);
  return (
    <table className=""="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <tr>
                <td scope="row">{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        {listUsers && listUsers.length === 0 && (
          <tr>
            <td colSpan={"4"}> Not Found data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TableUser;
