import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
const TableQuiz = () => {
  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.length === 0) {
      setListQuiz(res.DT);
    }
    console.log("res", res);
  };
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Type</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {listQuiz &&
          listQuiz.map((item, index) => {
            return (
              <tr key={`table-quiz-${index}`}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.difficulty}</td>
                <td>
                  <button className="btn btn-warning"></button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableQuiz;