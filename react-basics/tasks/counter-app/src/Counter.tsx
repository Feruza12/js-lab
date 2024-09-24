import React, { useState, useEffect } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setCounter(0);
  };

  const startTimer = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setCounter((prev) => {
          if (prev < 20) return prev + 1;
          clearInterval(newTimer);
          return prev;
        });
      }, 1000);
      setTimer(newTimer);
    }
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" pb-5">
        <h1 className="text-4xl font-bold mb-4 border-2 px-5 py-2 rounded-xl border-red-600">
          Counter: {counter}
        </h1>
      </div>

      {counter === 10 && <p className="text-green-500">Counter reached 10!</p>}
      {counter <= 0 && (
        <p className="text-red-500">Counter cannot go below 0</p>
      )}
      <div className="flex space-x-2 mb-4">
        <button
          className="w-24 bg-blue-500 text-white py-2 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="w-24 bg-red-500 text-white py-2 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="w-24 bg-gray-500 text-white px-4 py-2 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      {timer ? (
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={stopTimer}
        >
          Stop Timer
        </button>
      ) : (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={startTimer}
        >
          Start Timer
        </button>
      )}
    </div>
  );
};

export default Counter;
