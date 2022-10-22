import React from "react";
import _ from "lodash";
const Question = ({ data, index }) => {
  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleCheckBox = (e) => {};
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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(e) => handleCheckBox(e, `a${a.id}-q${data.id}`)}
                />
                <label className="form-check-label">{a.description}</label>
              </div>
            </div>;
          })}
      </div>
    </>
  );
};

export default Question;
