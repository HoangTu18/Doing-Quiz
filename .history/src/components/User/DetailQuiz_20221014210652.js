import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
import "./DetailQuiz.scss";
const DetailQuiz = () => {
  const params = useParams();
  const location = useLocation();
  console.log("location", location);
  const quizId = params.id;

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    console.log("check question: ", res);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let questionDescription,
        image = null;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });
          return { questionId: key, answers, questionDescription, image };
        })
        .value();
    }
  };
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}:{location?.state?.quizTitle}
        </div>
        <hr />
        <div className="q-body">
          <img />
        </div>
        <div className="q-content">
          <div className="question">Question 1:How are you doing</div>
          <div className="answer">
            <div className="a-child">A</div>
            <div className="a-child">B</div>
            <div className="a-child">C</div>
            <div className="a-child">D</div>
          </div>
        </div>
        <div className="footer">
          <button className="btn btn-primary">Prev</button>
          <button className="btn btn-secondary">Next</button>
        </div>
      </div>
      <div className="right-content">count down</div>
    </div>
  );
};

export default DetailQuiz;