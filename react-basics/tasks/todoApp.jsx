import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className='todoApp'>
      <div className='appTitle'>
        <h1 className='title'>To-Do List</h1>
      </div>

      <form
        onSubmit={addTask}
        className='form'
      >
        <input
          className='input'
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Enter a new task'
        />
        <button
          className='btn'
          type='submit'
        >
          Add Task
        </button>
      </form>
      <div className='taskDescription'>{tasks.length === 0 && <p className='description'>No tasks left!</p>}</div>
      <div className='taskDescription'>
        {tasks.length > 0 && tasks.every((task) => task.completed) && (
          <p className='description'>All tasks completed!</p>
        )}
      </div>

      <ul className='todoList'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className='todoListItem'
          >
            <input
              type='checkbox'
              className='checkbox'
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <div className='taskName'>
              <span
                className='name'
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
              >
                {task.name}
              </span>
            </div>
            <button
              className='btn'
              onClick={() => removeTask(index)}
            >
              Remove task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
