import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(10);
  const timer = useEffect(() => {
    setCount(count - 1);
    setInterval(() => {}, 1000);

    clearInterval(timer);
  }, []);
  return (
    <div key={`question-abc-${index}`} className="countdown-container">
      {count}
    </div>
  );
};

export default CountDown;
