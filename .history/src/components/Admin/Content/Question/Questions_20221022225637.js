import React from "react";
import Select from "react-select";
const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <div className="add-new-question">Manage Questions</div>
    </div>
  );
};

export default Questions;
