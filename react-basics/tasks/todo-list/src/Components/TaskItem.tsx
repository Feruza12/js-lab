import React from "react";

interface TaskItemProps {
  task: { name: string; completed: boolean };
  onToggle: () => void;
  onRemove: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onRemove }) => {
  return (
    <li
      className={`flex justify-between items-center ${
        task.completed ? "line-through" : ""
      }`}
    >
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="m-1"
        />
        {task.name}
      </label>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded mb-2"
        onClick={onRemove}
      >
        Remove
      </button>
    </li>
  );
};

export default TaskItem;
