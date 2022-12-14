import React from "react";
import CountDown from "./CountDown";

const RightContent = ({ dataQuiz }) => {
  console.log(dataQuiz);
  return (
    <>
      <div className="main-timer">
        <CountDown />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return <div className="question">{index + 1}</div>;
          })}
      </div>
    </>
  );
};

export default RightContent;
