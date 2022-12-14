import React, { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";

const ListQuiz = () => {
  const [arrayQuiz, setArrayQuiz] = useState([]);
  useEffect(() => {
    getQuizData();
  }, []);
  const getQuizData = async () => {
    const res = await getQuizByUser();
    if (res && res.EC === 0) {
      setArrayQuiz(res.DT);
    }
  };
  return (
    <div className="list-quiz-container">
      {arrayQuiz &&
        arrayQuiz.length > 0 &&
        arrayQuiz.map((quiz, index) => {
          return (
            <div
              key={`${index - quiz}`}
              className="card"
              style={{ width: "18rem;" }}
            >
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Quiz {index + 1}</h5>
                <p className="card-text">{quiz.description}</p>
                <button className="btn btn-primary">Start Now</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListQuiz;
