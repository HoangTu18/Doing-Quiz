import React from "react";
import _ from "lodash";
const Question = ({ data, index }) => {
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      <div className="q-image">
        <img src={`data:image/jpeg;base64, ${data.image}`} />
      </div>
      <div className="question">
        Question {index + 1}: {data.questionDescription}?
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length &&
          data.answers.map((a, index) => {
            <div className="a-child">A</div>;
          })}
      </div>
    </>
  );
};

export default Question;
