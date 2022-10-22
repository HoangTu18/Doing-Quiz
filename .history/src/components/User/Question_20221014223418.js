import React from "react";
import _ from "lodash";
const Question = ({ data }) => {
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      <div className="question">Question 1:How are you doing</div>
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
