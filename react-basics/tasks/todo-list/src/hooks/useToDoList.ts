import { useState } from "react";

interface Task {
  name: string;
  completed: boolean;
}

export const useToDoList = () => {
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

  return {
    tasks,
    taskName,
    setTaskName,
    addTask,
    toggleTaskCompletion,
    removeTask,
  };
};
