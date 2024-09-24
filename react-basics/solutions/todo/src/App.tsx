import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

interface Task {
    id: string;
    name: string;
    completed: boolean;
}

function App() {
    var [tasks, setTasks] = useState<Task[]>([]);

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: uuid(),
                name: formData.get("task-name")?.toString() || "",
                completed: false
            }
        ]);

        e.currentTarget.reset();
    }

    function toggleTaskCompletion(taskId: string) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

    function removeTask(taskId: string) {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id != taskId)
        );
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Task Name"
                    name="task-name"
                />
                <button className="add-task">Add Task</button>
            </form>
            <ul className="task-container">
                {tasks.length ? (
                    tasks.map(function (task: Task) {
                        return (
                            <li
                                className=""
                                key={task.id}
                                style={{
                                    textDecoration: task.completed
                                        ? "line-through"
                                        : "none"
                                }}
                            >
                                <span className="task-name">
                                    {task.name}
                                </span>
                                <input
                                    type="checkbox"
                                    onChange={() =>
                                        toggleTaskCompletion(task.id)
                                    }
                                    checked={task.completed}
                                />
                                <button
                                    className="remove-task"
                                    onClick={() => removeTask(task.id)}
                                >
                                    Remove Task
                                </button>
                            </li>
                        );
                    })
                ) : (
                    <p>No tasks left for today. Add a new one?</p>
                )}
            </ul>
            {tasks.every(function (task) {
                return task.completed == true;
            }) ? (
                <p className="task-container">All tasks completed!</p>
            ) : null}
        </>
    );
}

export default App;
