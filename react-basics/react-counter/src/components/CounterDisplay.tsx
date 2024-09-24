import { useEffect } from "react";
import { GenericProps } from "../interfaces/GenericProps";

function CounterDisplay({
  timerActivated,
  count,
  incrementCount,
}: Pick<GenericProps, "timerActivated" | "count" | "incrementCount">) {
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
