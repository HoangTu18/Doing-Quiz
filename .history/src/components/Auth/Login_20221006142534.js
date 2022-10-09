import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login-container">
      <div className="header">Don't have an account yet?</div>
      <div className="title">HoiDanIT</div>
      <div className="welcome">Hello, Who's this?</div>
      <div className="content-form">
        <div className="form-group">
          <label>Email</label>
          <input type={"email"} />
          <label></label>
        </div>
      </div>
    </div>
  );
};

export default Login;
