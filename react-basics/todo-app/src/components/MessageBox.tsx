import { useEffect, useState } from "react";
import { Task } from "../App";

interface MessageBoxProps {
  tasks: Task[];
}

function MessageBox({ tasks }: MessageBoxProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let allCompleted = true;

    for (let i = 0; i < tasks.length; i++) {
      if (!tasks[i].completed) {
        allCompleted = false;
        break;
      }
    }

    if (allCompleted && tasks.length > 0) {
      setMessage("All tasks completed!");
    } else if (tasks.length === 0) {
      setMessage("No tasks left!");
    } else {
      setMessage("");
    }
  }, [tasks]);

  return <p className="message-container">{message}</p>;
}
export default MessageBox;
