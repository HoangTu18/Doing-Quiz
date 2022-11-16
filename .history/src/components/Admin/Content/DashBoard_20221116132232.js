import React from "react";
import "./DashBoard.scss";
function DashBoard(props) {
  return (
    <div className="dashboard-container">
      <div className="title">Analytics Dashboard</div>
      <div className="content">
        <div className="c-left">
          <div className="child">Total users</div>
          <div className="child">Total Quizzes</div>
          <div className="child">Total Question</div>
          <div className="child">Total Answers</div>
        </div>
        <div className="c-right">
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
