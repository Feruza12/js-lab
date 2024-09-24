/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add new task to the list
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent form from reloading
    if (newTask.trim() !== "") {
      const newTaskObject = {
        name: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask(""); // Clear input after adding
    }
  };

  // Toggle task completion
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Remove a task from the list
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Conditional messages
  const allCompleted =
    tasks.length > 0 && tasks.every((task) => task.completed);
  const noTasksLeft = tasks.length === 0;

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Form to add new tasks */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task list */}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
            />
            {task.name}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Conditional UI */}
      {noTasksLeft && <p>No tasks left!</p>}
      {allCompleted && tasks.length > 0 && <p>All tasks completed!</p>}
    </div>
  );
}

export default App;
