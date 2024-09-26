import { Task } from "./Task";

export type UseTodoReturn = {
    tasks: Task[];
    addTask: (id: React.FormEvent<HTMLFormElement>) => void;
    removeTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
};
