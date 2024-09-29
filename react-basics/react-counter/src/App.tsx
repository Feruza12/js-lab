import { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import ControlsBar from "./components/ControlsBar";
import MessageDisplay from "./components/MessageDisplay";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [timerActivated, setTimerActivated] = useState(false);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementCount() {
    count > 0 && setCount((prevCount) => prevCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  function toggleTimer() {
    if (count < 20 && !timerActivated) {
      setTimerActivated(true);
    } else {
      setTimerActivated(false);
    }
  }

  return (
    <div className="app-container">
      <MessageDisplay
        count={count}
        timerActivated={timerActivated}
        toggleTimer={toggleTimer}
      />
      <CounterDisplay
        timerActivated={timerActivated}
        count={count}
        incrementCount={incrementCount}
      />
      <ControlsBar
        timerActivated={timerActivated}
        toggleTimer={toggleTimer}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCount={resetCount}
      />
    </div>
  );
}
