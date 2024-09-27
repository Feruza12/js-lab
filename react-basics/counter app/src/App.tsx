import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [counterMessage, setCounterMessage] = useState("");
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  function watchCount() {
    if (count === 10) {
      setCounterMessage("You reached 10!");
      return;
    }
    if (count < 0) {
      setCounterMessage("Count can't be less than 0!");
      return;
    }

    setCounterMessage("Count: " + count);
  }

  useEffect(() => {
    watchCount();
    if (isTimerRunning) {
      const timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);

      if (count === 20) {
        clearTimeout(timer);
        setIsTimerRunning(false);
      }
    }
  }, [count, isTimerRunning]);

  return (
    <>
      <h1>Counter App</h1>
      <p>{counterMessage}</p>
      <div className="card-container">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
        </div>
        <div className="card">
          <button
            onClick={() => setCount((count) => (count > -1 ? count - 1 : 0))}
          >
            Decrement
          </button>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count * 0)}>Reset</button>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <button onClick={() => setIsTimerRunning(!isTimerRunning)}>
            Start timer
          </button>
        </div>
        <div className="card">
          <button onClick={() => setIsTimerRunning(!isTimerRunning)}>
            Stop timer
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
