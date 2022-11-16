import React, { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [questions, setQuestions] = useState([
    {
      id: uuidv4(),
      description: "question 1",
      image: "",
      answers: [
        {
          id: uuidv4(),
          description: "answer 1",
          isCorrect: false,
        },
        {
          id: uuidv4(),
          description: "answer 2",
          isCorrect: false,
        },
      ],  }
      {
      id: uuidv4(),
      description: "question 2",
      image: "",
      answers: [
        {
          id: uuidv4(),
          description: "answer 1",
          isCorrect: false,
        },
        {
          id: uuidv4(),
          description: "answer 2",
          isCorrect: false,
        },
      ],
    },

  ]
  );
  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <hr />
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label className="mb-2">Select Quiz:</label>
          <Select
            value={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div className="mt-3 mb-2">Add questions:</div>
        <div>
          <div className="questions-content">
            <div className="form-floating description">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
              />
              <label>Question's Description</label>
            </div>
            <div className="group-upload">
              <label className="label-up">
                <RiImageAddFill />
              </label>
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
            <input className="form-check-input iscorrect" type="checkbox" />
            <div className="form-floating answer-name">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
              />
              <label>Answer 1</label>
            </div>
            <div className="btn-group">
              <span>
                <AiOutlinePlusCircle className="icon-add" />
              </span>
              <span>
                <AiOutlineMinusCircle className="icon-remove" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
