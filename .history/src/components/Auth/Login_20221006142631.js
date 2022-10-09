import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login-container">
      <div className="header">Don't have an account yet?</div>
      <div className="title col-4">HoiDanIT</div>
      <div className="welcome col-4">Hello, Who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input type={"email"} className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default Login;
