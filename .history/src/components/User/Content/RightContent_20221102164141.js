import React from "react";

const RightContent = ({ dataQuiz }) => {
  console.log(dataQuiz);
  return (
    <>
      <div className="main-timer">10:10</div>
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
