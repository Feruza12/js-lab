import { useEffect } from "react";
import { CounterProps } from "../interfaces/CounterProps";

function CounterDisplay({
  timerActivated,
  count,
  incrementCount,
}: Pick<CounterProps, "timerActivated" | "count" | "incrementCount">) {
  let timer: number | undefined;

  useEffect(() => {
    if (timerActivated) {
      timer = setInterval(() => {
        incrementCount();
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timerActivated, count]);

  return <p className="counter">{count}</p>;
}

export default CounterDisplay;
