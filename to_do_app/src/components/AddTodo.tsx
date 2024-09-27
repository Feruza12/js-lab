import React, { useState } from "react";

interface AddTodoProps {
  onAddTodo: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 justify-center mb-5">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
              content="outlined"
              className="border rounded w-1/2 h-10 p-2"
      />
      <button type="submit" className="border rounded bg-green-300 w-[150px] text-bold">Add</button>
    </form>
  );
};

export default AddTodo;
