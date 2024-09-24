/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // Counter state
  const [timerRunning, setTimerRunning] = useState(false); // Timer state

  // Function to increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter (prevent going below 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to reset the counter to 0
  const reset = () => {
    setCount(0);
  };

  // Function to toggle the timer on and off
  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  };

  // useEffect to handle the side effect of the timer
  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 20) {
            clearInterval(interval); // Stop the timer at 20
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 1000); // Increment every second
    } else if (!timerRunning && interval) {
      clearInterval(interval);
    }

    // Clean up the interval on component unmount or when timer stops
    return () => clearInterval(interval);
  }, [timerRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      {/* Conditional Messages */}
      {count === 10 && <p>Counter reached 10!</p>}
      {count === 0 && <p>Counter cannot go below 0</p>}

      {/* Buttons for user interaction */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleTimer}>
          {timerRunning ? "Stop Timer" : "Start Timer"}
        </button>
      </div>
    </div>
  );
};

export default Counter;
