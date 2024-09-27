import React, { useState, useEffect } from "react";

const CounterApp: React.FC = () => {

  const [counter, setCounter] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    let timer;

    if (isTimerRunning) {
      timer = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter >= 20) {
            setIsTimerRunning(false); 
            clearInterval(timer!);
            return prevCounter;
          }
          return prevCounter + 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer!);
  }, [isTimerRunning]);


  const increment = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
      setMessage(""); 
    } else {
      setMessage("Counter cannot go below 0");
    }
  };

  const reset = () => {
    setCounter(0);
    setMessage("");
    setIsTimerRunning(false);
  };


  const toggleTimer = () => {
    setIsTimerRunning((prevState) => !prevState);
  };


  useEffect(() => {
    if (counter === 10) {
      setMessage("Counter reached 10!");
    } else if (counter !== 0 && counter < 10) {
      setMessage(""); 
    }
  }, [counter]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Counter: {counter}</h1>
      {message && <p>{message}</p>}

      <div>
        <button onClick={increment} disabled={counter >= 20}>
          Increment
        </button>
        <button onClick={decrement} disabled={counter <= 0}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleTimer}>
          {isTimerRunning ? "Stop Timer" : "Start Timer"}
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
