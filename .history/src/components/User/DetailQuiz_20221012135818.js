import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
const DetailQuiz = () => {
  const params = useParams();
  const quizId = params.id;

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    console.log("check question: ", res);
    if (res && res.EC === 0) {
      let raw = res.DT;
    }
  };
  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;