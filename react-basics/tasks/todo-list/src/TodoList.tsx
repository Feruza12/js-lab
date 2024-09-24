import React, { useState } from "react";

interface Task {
  name: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim() === "") return;
    setTasks([...tasks, { name: taskName, completed: false }]);
    setTaskName("");
  };

  const toggleTaskCompletion = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

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
          <li
            key={index}
            className={`flex justify-between items-center ${
              task.completed ? "line-through" : ""
            }`}
          >
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                className=" m-1"
              />
              {task.name}
            </label>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded mb-2"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {tasks.length > 0 && tasks.every((task) => task.completed) && (
        <p>All tasks completed!</p>
      )}
    </div>
  );
};

export default TodoList;
