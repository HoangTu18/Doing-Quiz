import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const DetailQuiz = () => {
  const params = useParams();
  const quizId = params.id;

  useEffect(() => {}, [quizId]);

  const fetchQuestions = () => {};
  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;
