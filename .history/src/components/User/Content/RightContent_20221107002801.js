import React from "react";
import CountDown from "./CountDown";

const RightContent = ({ dataQuiz, handleFinishQuiz }) => {
  const onTimeUp = () => {
    handleFinishQuiz();
  };
  console.log(dataQuiz);
  const getClassQuestion = (question) => {
    return "question";
  };
  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div
                key={`question-abc-${index}`}
                className={getClassQuestion(item)}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;
