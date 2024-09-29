import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import MessageBox from "./components/MessageBox";
import "./App.css";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [lastId, setLastId] = useState(0);

  function addNewTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  function toggleCompleted(taskId: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function removeTask(taskId: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="app-container">
      <p>
        <b>Simple To Do App</b>
      </p>
      <MessageBox tasks={tasks} />
      <TaskInput
        addNewTask={addNewTask}
        lastId={lastId}
        setLastId={setLastId}
      />
      <TaskList
        tasks={tasks}
        toggleTaskCompleted={toggleCompleted}
        removeTask={removeTask}
      />
    </div>
  );
}
