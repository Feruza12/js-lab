import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (counter === 20) {
      stopTimer();
      setTimerIsRunning(false);
    }
  }, [counter]);

  useEffect(() => {
    return () => clearInterval(timerRef.current ? timerRef.current : undefined);
  }, []);

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    // I also could have used
    // setCounter(prev => (prev > 0 ? prev - 1 : 0));

    // but I thought this option was better because I am not unnessarily updating state
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  }

  function reset() {
    setCounter(0);
  }

  function startTimer() {
    if (!timerRef.current) {
      const counterTimerId = setInterval(
        () => setCounter((prev) => prev + 1),
        1000,
      );

      timerRef.current = counterTimerId;
      setTimerIsRunning(true);
    }
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerIsRunning(false);
    }
  }

  return (
    <main>
      <p> Current counter value {counter}</p>
      {counter === 10 && <p>Counter reached {counter}!</p>}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={counter <= 0}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
      {counter <= 0 && <p>Cannot go below zero</p>}
      <button onClick={timerIsRunning ? stopTimer : startTimer}>
        {timerIsRunning ? "Stop Timer" : "Start Timer"}
      </button>
    </main>
  );
}

export default App;
