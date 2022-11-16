import React from "react";
import CountDown from "./CountDown";
import { useRef } from "react";
const RightContent = ({ dataQuiz, handleFinishQuiz, setIndex }) => {
  const refDiv = useRef(null);
  const onTimeUp = () => {
    handleFinishQuiz();
  };
  // console.log(dataQuiz);

  const getClassQuestion = (index, question) => {
    // check answered
    if (question && question.answers.length > 0) {
      let isAnswered = question.answers.find((a) => a.isSelected === true);
      if (isAnswered) {
        return "question selected";
      }
    }
    return "question";
  };

  const handleClickQuestion = (question, index) => {
    setIndex(index);
    refDiv.current.className = "question ref";
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
                className={getClassQuestion(index, item)}
                onClick={() => handleClickQuestion(item, index)}
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
