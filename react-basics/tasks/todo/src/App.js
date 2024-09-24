import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [message, setMessage] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        name: newTask.trim(),
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    if (tasks.length === 0) {
      setMessage("No tasks left!");
    } else if (tasks.every((task) => task.completed)) {
      setMessage("All tasks completed!");
    } else {
      setMessage("");
    }
  }, [tasks]);

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>

      <form onSubmit={addTask} style={styles.form}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>
          Add Task
        </button>
      </form>

      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
              style={styles.checkbox}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
                flexGrow: 1,
              }}
            >
              {task.name}
            </span>
            <button
              onClick={() => removeTask(index)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    flexGrow: 1,
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  taskList: {
    listStyleType: "none",
    padding: 0,
  },
  taskItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "4px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  checkbox: {
    marginRight: "10px",
  },
  removeButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    fontSize: "12px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    color: "gray",
  },
};

export default App;
