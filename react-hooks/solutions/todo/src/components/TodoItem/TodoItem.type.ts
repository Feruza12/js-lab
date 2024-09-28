import { Task } from "../../types";

export type TodoItemProps = {
    task: Task;
    toggleTaskCompletion: (id: string) => void;
    removeTask: (id: string) => void;
};
