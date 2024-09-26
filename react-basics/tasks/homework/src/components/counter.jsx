import React, { useState, useEffect } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerRunning && counter < 20) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    if (counter >= 20) {
      setIsTimerRunning(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, counter]);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
  };

  const handleReset = () => {
    setCounter(0);
    setIsTimerRunning(false);
  };

  // Toggle Timer Start/Stop
  const toggleTimer = () => {
    setIsTimerRunning((prevIsTimerRunning) => !prevIsTimerRunning);
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px" }}
      className='counter'
    >
      <div className='counterTitle'>
        <h1 className='title'>Counter App</h1>
      </div>
      <div className='counterSubtitle'>
        <h2 className='subtitle'>{counter}</h2>
      </div>
      <div className='counterDescription'>
        {counter === 10 && (
          <p
            className='description'
            style={{ color: "green" }}
          >
            Counter reached 10!
          </p>
        )}
      </div>
      <div className='counterDescription'>
        {counter === 0 && (
          <p
            className='description'
            style={{ color: "red" }}
          >
            Counter cannot go below 0
          </p>
        )}
      </div>

      <div className='btnsGroup'>
        <button
          className='btn'
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className='btn'
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className='btn'
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div
        className='btnGroup'
        style={{ marginTop: "20px" }}
      >
        <button
          className='btn'
          onClick={toggleTimer}
        >
          {isTimerRunning ? "Stop Timer" : "Start Timer"}
        </button>
      </div>

      <div className='counterDescription'>
        {counter >= 20 && (
          <p
            className='description'
            style={{ color: "blue" }}
          >
            Timer stopped at 20!
          </p>
        )}
      </div>
    </div>
  );
};

export default CounterApp;
