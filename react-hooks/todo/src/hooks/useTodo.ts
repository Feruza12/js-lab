import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../interfaces/Task.interface";

const useTodo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (tasks.length === 0) {
      setMessage("No tasks left!");
    } else if (tasks.every((task) => task.completed)) {
      setMessage("All tasks completed!");
    } else {
      setMessage("");
    }
  }, [tasks]);

  const addTask = (name: string) => {
    if (name.trim()) {
      const task: Task = {
        id: uuidv4(),
        name: name.trim(),
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  const toggleCompletion = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return {
    tasks,
    message,
    addTask,
    toggleCompletion,
    removeTask,
  };
};

export default useTodo;
