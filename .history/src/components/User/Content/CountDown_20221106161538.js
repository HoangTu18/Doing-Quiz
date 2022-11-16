import { clear } from "@testing-library/user-event/dist/clear";
import { indexOf } from "lodash";
import React from "react";
import { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    setCount(count - 1);
    const timer = setInterval(() => {}, 1000);

    // clearInterval(timer);
  }, [count]);
  return <div className="countdown-container">{count}</div>;
};

export default CountDown;
