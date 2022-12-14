import React, { useState } from "react";
import Select from "react-select";
const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});

  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <div className="add-new-question">
        <Select
          value={selectedQuiz}
          onChange={setSelectedQuiz}
          options={options}
        />
      </div>
    </div>
  );
};

export default Questions;
