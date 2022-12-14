import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import "./DashBoard.scss";
function DashBoard(props) {
  const data = [
    {
      name: "Quizzes",
      Qz: 4000,
    },
    {
      name: "Questions",
      Qs: 3000,
    },
    {
      name: "Answers",
      As: 2780,
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="title">Analytics Dashboard</div>
      <div className="content">
        <div className="c-left">
          <div className="child">
            <span className="text-1">Total users</span>
            <span className="text-2">100</span>
          </div>
          <div className="child">
            <span className="text-1">Total Quizzes</span>
            <span className="text-2">100</span>
          </div>
          <div className="child">
            {" "}
            <span className="text-1">Total Question</span>
            <span className="text-2">100</span>
          </div>
          <div className="child">
            {" "}
            <span className="text-1">Total Answers</span>
            <span className="text-2">100</span>
          </div>
        </div>
        <div className="c-right">
          <ResponsiveContainer width={"95%"} height={"100%"}>
            <BarChart data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Qz" fill="#8884d8" />
              <Bar dataKey="Qs" fill="#82ca9d" />
              <Bar dataKey="As" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
