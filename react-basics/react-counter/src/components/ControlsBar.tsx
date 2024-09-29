import { CounterProps } from "../interfaces/CounterProps";

function ControlsBar({
  timerActivated,
  toggleTimer,
  incrementCount,
  decrementCount,
  resetCount,
}: Omit<CounterProps, "count">) {
  return (
    <div className="button-container">
      <button onClick={incrementCount} className="button">
        Increment
      </button>
      <button onClick={decrementCount} className="button">
        Decrement
      </button>
      <button onClick={resetCount} className="button">
        Reset
      </button>
      <button onClick={toggleTimer} className="button">
        {timerActivated ? "Stop timer" : "Start timer"}
      </button>
    </div>
  );
}

export default ControlsBar;
