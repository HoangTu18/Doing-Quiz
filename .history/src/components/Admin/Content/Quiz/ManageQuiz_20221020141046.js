import React from "react";
import "./ManageQuiz.scss";
const ManageQuiz = () => {
  return (
    <div className="quiz-container">
      <div className="title">ManageQuiz</div>
      <hr />
      <div className="add-new">
        <fieldset className="border rounded-3 p-3">
          <legend className="float-none w-auto px-3">Add new Quiz:</legend>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" />
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" />
            <label for="floatingPassword">Description</label>
          </div>
        </fieldset>
      </div>
      <div className="list-detail">table</div>
    </div>
  );
};

export default ManageQuiz;
