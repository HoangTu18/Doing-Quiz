import React from "react";
import { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {}, []);
  return <div className="countdown-container">{count}</div>;
};

export default CountDown;
