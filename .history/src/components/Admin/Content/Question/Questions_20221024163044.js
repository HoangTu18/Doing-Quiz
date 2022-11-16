import React, { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
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
            value={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div className="mt-3">Add questions:</div>
        <div>
          <div className="questions-content">
            <div class="form-floating description">
              <input
                type="text"
                class="form-control"
                placeholder="name@example.com"
              />
              <label>Description</label>
            </div>
            <div className="group-upload">
              <label className="label-up">Upload Image</label>
              <input type={"file"} hidden />
              <span>0 file is Upload</span>
            </div>
            <div className="btn-add">
              <span>
                <BsFillPatchPlusFill className="icon-add" />
              </span>
              <span>
                <BsFillPatchMinusFill className="icon-remove" />
              </span>
            </div>
          </div>
          <div className="answers-content">
            <input className="form-check-input" type="checkbox" />
            <div class="form-floating description">
              <input
                type="text"
                class="form-control"
                placeholder="name@example.com"
              />
              <label>Answer 1</label>
            </div>
            <div className="btn-add">
              <span>
                <BsFillPatchPlusFill className="icon-add" />
              </span>
              <span>
                <BsFillPatchMinusFill className="icon-remove" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
