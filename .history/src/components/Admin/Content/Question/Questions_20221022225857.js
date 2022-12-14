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
        <div className="col-6 form-group">
          <label>Select Quiz:</label>
          <Select
            className="form-control"
            value={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
