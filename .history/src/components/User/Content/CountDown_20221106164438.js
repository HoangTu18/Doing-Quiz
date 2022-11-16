import { clear } from "@testing-library/user-event/dist/clear";
import { indexOf } from "lodash";
import React from "react";
import { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(10);

  const a = new Date(10 * 1000).toISOString().substring(11, 16);
  useEffect(() => {
    if (count === 0) return;
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    /* 
    timer 1     setCount => change count

    */

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div className="countdown-container">{count}</div>;
};

export default CountDown;
