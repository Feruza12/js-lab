import { useState } from "react";
import { Task } from "../App";

interface TaskInputProps {
  addNewTask: (newTask: Task) => void;
  lastId: number;
  setLastId: (newLastId: (prevId: number) => number) => void;
}

function TaskInput({ addNewTask, lastId, setLastId }: TaskInputProps) {
  const [newTaskName, setNewTaskName] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (newTaskName.length > 0) {
      const newTask: Task = {
        id: lastId,
        name: newTaskName,
        completed: false,
      };

      addNewTask(newTask);
      setNewTaskName("");
      setLastId((lastId) => lastId + 1);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskName}
        placeholder="New task"
        className="input-field"
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <input type="submit" value="Add task" className="button" />
    </form>
  );
}

export default TaskInput;
