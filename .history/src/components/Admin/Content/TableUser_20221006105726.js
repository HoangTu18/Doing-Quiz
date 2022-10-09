import { useEffect } from "react";
import { getAllUsers } from "../../../services/apiService";
function TableUser({
  listUsers,
  handleClickBtnUpdate,
  handleClickBtnView,
  handleClickBtnDelete,
  setListUsers,
}) {
  //componentDidmount
  // useEffect(() => {
  //   fetchListUsers();
  // }, []);

  // const fetchListUsers = async () => {
  //   let res = await getAllUsers();
  //   if (res.EC === 0) {
  //     setListUsers(res.DT);
  //   }
  // };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <td>{index.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleClickBtnView(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickBtnUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
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
    </>
  );
}

export default TableUser;
