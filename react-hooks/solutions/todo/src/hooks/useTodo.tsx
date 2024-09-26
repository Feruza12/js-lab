import { useState } from "react";
import { Task, UseTodoReturn } from "../types";
import { v4 as uuid } from "uuid";

export function useTodo(): UseTodoReturn {
    var [tasks, setTasks] = useState<Task[]>([]);

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: uuid(),
                name:
                    formData.get("task-name")?.toString().trim() ||
                    "Unnamed",
                completed: false
            }
        ]);

        e.currentTarget.reset();
    }

    function removeTask(taskId: string) {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id != taskId)
        );
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

    return { tasks, addTask, removeTask, toggleTaskCompletion };
}
