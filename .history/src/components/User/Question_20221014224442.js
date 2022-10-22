import React from "react";
import _ from "lodash";
const Question = ({ data, index }) => {
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      <div className="q-image">
        <img src={`data:image/jpeg;base64, ${quiz.image}`} />
      </div>
      <div className="question">
        Question {index + 1}: {data.questionDescription}?
      </div>
      <div className="answer">
        <div className="a-child">A</div>
        <div className="a-child">B</div>
        <div className="a-child">C</div>
        <div className="a-child">D</div>
      </div>
    </>
  );
};

export default Question;
