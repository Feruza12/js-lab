import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [message, setMessage] = useState("");

  const incrementCounter = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const toggleTimer = () => {
    setTimerOn(!timerOn);
  };

  useEffect(() => {
    let timer;
    if (timerOn && counter < 20) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    if (counter === 20) {
      setTimerOn(false);
    }

    return () => clearInterval(timer);
  }, [timerOn, counter]);

  useEffect(() => {
    if (counter === 10) {
      setMessage("Counter reached 10!");
    } else if (counter === 20) {
      setMessage("Counter reached the limit (20)!");
    } else if (counter === 0) {
      setMessage("Counter cannot go below 0");
    } else {
      setMessage("");
    }
  }, [counter]);

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2 style={styles.counterValue}>{counter}</h2>

      <div style={styles.buttonGroup}>
        <button onClick={incrementCounter} style={styles.button}>
          Increment
        </button>
        <button onClick={decrementCounter} style={styles.button}>
          Decrement
        </button>
        <button onClick={resetCounter} style={styles.button}>
          Reset
        </button>
      </div>

      <div style={styles.timerGroup}>
        <button onClick={toggleTimer} style={styles.button}>
          {timerOn ? "Stop Timer" : "Start Timer"}
        </button>
      </div>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  counterValue: {
    fontSize: "48px",
    margin: "20px 0",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  timerGroup: {
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  message: {
    fontSize: "16px",
    color: "red",
    marginTop: "20px",
  },
};

export default App;
