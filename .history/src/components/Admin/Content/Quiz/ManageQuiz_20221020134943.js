import React from "react";

const ManageQuiz = () => {
  return (
    <div className="quiz-container">
      <div className="title">ManageQuiz</div>
      <div className="add-new">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <fieldset className="border rounded-3 p-3">
          <legend>Personalia:</legend>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" />
          <br></br>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />
          <br></br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br></br>
          <label for="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" />
          <br></br>
          <input type="submit" value="Submit" />
        </fieldset>
      </div>
      <div className="list-detail">table</div>
    </div>
  );
};

export default ManageQuiz;
