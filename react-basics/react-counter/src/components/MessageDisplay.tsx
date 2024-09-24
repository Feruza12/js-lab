import { useEffect, useState } from "react";
import { GenericProps } from "../interfaces/GenericProps";

function MessageDisplay({
  count,
  timerActivated,
  toggleTimer,
}: Pick<GenericProps, "count" | "timerActivated" | "toggleTimer">) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 0) {
      setMessage("Counter cannot go below 0");
    } else if (count === 10) {
      setMessage("Counter reached 10!");
    } else if (count === 20 && timerActivated) {
      setMessage("Timer stopped");
      toggleTimer();
    } else {
      setMessage("");
    }
  }, [count]);
  return <p className="message-container">{message}</p>;
}

export default MessageDisplay;
