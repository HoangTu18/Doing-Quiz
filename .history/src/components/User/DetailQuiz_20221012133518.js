import React from "react";
import { useParams } from "react-router-dom";
const DetailQuiz = () => {
  const params = useParams();
  console.log("check params:", params);
  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;
