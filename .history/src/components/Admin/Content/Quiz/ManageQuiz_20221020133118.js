import React from "react";

const ManageQuiz = () => {
  return (
    <div className="quiz-container">
      <div className="title">ManageQuiz</div>
      <div className="add-new">
        <div className=""="form-floating mb-3">
          <input
            type="email"
            className=""="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className=""="form-floating">
          <input
            type="password"
            className=""="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <div className="list-detail">table</div>
    </div>
  );
};

export default ManageQuiz;
