import React, { useState } from "react";
import _ from "lodash";
import Lightbox from "react-awesome-lightbox";
const Question = ({ data, index, handleCheckBox }) => {
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  if (_.isEmpty(data)) {
    return <></>;
  }
  const handleHandleCheckBox = (e, aId, qId) => {
    handleCheckBox(aId, qId);
  };

  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img
            style={{ cursor: "pointer", justifyContent: "center" }}
            onClick={() => setIsPreviewImage(true)}
            src={`data:image/jpeg;base64, ${data.image}`}
          />

          {isPreviewImage === true && (
            <Lightbox
              image={`data:image/jpeg;base64, ${data.image}`}
              title={"Question Image"}
              onClose={() => setIsPreviewImage(false)}
            ></Lightbox>
          )}
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
            return (
              <div key={`answer-${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={a.isSelected}
                    onChange={(e) =>
                      handleHandleCheckBox(e, a.id, data.questionId)
                    }
                  />
                  <label className="form-check-label">{a.description}</label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
