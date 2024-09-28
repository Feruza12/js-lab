import React from "react";
import { Task } from "../../types";
import { CreateTaskForm, TodoItem } from "../../components";
import { useTodo } from "../../hooks";
import styles from "./Todo.module.css";

export function Todo() {
    var { tasks, addTask, removeTask, toggleTaskCompletion } = useTodo();

    function isAllTasksCompleted(tasks: Task[]) {
        for (let i = 0; i < tasks.length; ++i) {
            if (tasks[i].completed == false) return false;
        }
        return true;
        // return tasks.every((task) => task.completed == true);
    }

    return (
        <React.Fragment>
            <CreateTaskForm addTask={addTask} />
            <ul className={styles["task-container"]}>
                {tasks.length ? (
                    tasks.map((task) => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            toggleTaskCompletion={toggleTaskCompletion}
                            removeTask={removeTask}
                        />
                    ))
                ) : (
                    <p>No tasks planned for today. Add a new one?</p>
                )}
            </ul>

            {isAllTasksCompleted(tasks) && tasks.length ? (
                <p className={styles["message"]}>All tasks completed!</p>
            ) : null}
        </React.Fragment>
    );
}
