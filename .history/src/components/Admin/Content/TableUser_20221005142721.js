import React from "react";
import { useState } from "react";

function TableUser(props) {
  const [listUsers, setListUsers] = useState([
    {
      id: 17,
      username: "eric",
      email: "phamhoangtu2000@gmail.com",
      role: "USER",
    },
    {
      id: 18,
      username: "eric",
      email: "phamhoangtu2000@gmail.com",
      role: "USER",
    },
  ]);
  return (
    <table class="table table-hover">
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
                <th scope="row">{index + 1}</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableUser;
