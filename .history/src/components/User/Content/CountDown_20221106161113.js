import React from "react";
import { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(10);
  const timer = useEffect(() => {
    setInterval(() => {
      setCount(count - 1);
    }, 1000);
  }, []);
  return <div className="countdown-container">{count}</div>;
};

export default CountDown;
