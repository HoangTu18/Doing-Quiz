import { clear } from "@testing-library/user-event/dist/clear";
import { indexOf } from "lodash";
import React from "react";
import { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(10);

  const toHHMMSS = (secs) => {
    const sec_num = parseInt(secs, 10);
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor(sec_num / 60) % 60;
    const seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

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
