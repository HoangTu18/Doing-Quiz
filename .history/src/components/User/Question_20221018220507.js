import React from "react";
import _ from "lodash";
const Question = ({ data, index }) => {
  if (_.isEmpty(data)) {
    return <></>;
  }
  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img src={`data:image/jpeg;base64, ${data.image}`} />
        </div>
      ) : (
        <div className="q-image"></div>
      )}
      <div className="question">
        Question {index + 1}: {data.questionDescription}?
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length &&
          data.answers.map((a, index) => {
            <div key={`answer-${index}`} className="a-child">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label">{a.description}</label>
              </div>
            </div>;
          })}
      </div>
    </>
  );
};

export default Question;
