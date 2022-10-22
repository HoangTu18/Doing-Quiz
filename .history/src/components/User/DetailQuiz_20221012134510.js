import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
const DetailQuiz = () => {
  const params = useParams();
  const quizId = params.id;

  useEffect(() => {}, [quizId]);

  const fetchQuestions = async () => {
    let res = await getDataQuiz();
  };
  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;
