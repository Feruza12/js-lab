import React from "react";
import { useToDoList } from "../hooks/useToDoList";
import TaskItem from "./TaskItem";

const TodoList: React.FC = () => {
  const {
    tasks,
    taskName,
    setTaskName,
    addTask,
    toggleTaskCompletion,
    removeTask,
  } = useToDoList();

  return (
    <div className="max-w-md mx-auto p-4 justify-center">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <form onSubmit={addTask} className="mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Add a new task"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          type="submit"
        >
          Add Task
        </button>
      </form>
      <ul>
        {tasks.length === 0 && <li>No tasks left!</li>}
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onToggle={() => toggleTaskCompletion(index)}
            onRemove={() => removeTask(index)}
          />
        ))}
      </ul>
      {tasks.length > 0 && tasks.every((task) => task.completed) && (
        <p>All tasks completed!</p>
      )}
    </div>
  );
};

export default TodoList;
