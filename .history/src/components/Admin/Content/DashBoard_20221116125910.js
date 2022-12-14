import React from "react";
import "./DashBoard.scss";
function DashBoard(props) {
  return (
    <div className="dashboard-container">
      <div className="title">Analytics Dashboard</div>
      <div className="content">
        <div className="c-left">
          <div>Total users</div>
          <div>Total Quizzes</div>
          <div>Total Question</div>
          <div>Total Answers</div>
        </div>
        <div className="c-right"></div>
      </div>
    </div>
  );
}

export default DashBoard;
