import React, { useState, useEffect } from "react";
import Select from "react-select";
const AssignQuiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState({});

  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      let newQuiz = res.DT.map((item) => {
        return {
          value: item.id,
          label: `${item.id} - ${item.description}`,
        };
      });
      setListQuiz(newQuiz);
    }
  };
  return <div className="assign-quiz-container"></div>;
};

export default AssignQuiz;
