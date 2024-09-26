import { useRef } from "react";

// Define the props for TodoList
interface Todo {
    id: number;
    todo: string;
    category: string;
    done: boolean;
    editable: boolean;
}

interface TodoListProps {
    todos: Todo;
    setInputValue: (value: string) => void;
    deleteTodo: (id: number) => void;
    completeTodo: (id: number) => void;
    editTodo: (id: number, text: string) => void;
}

export default function TodoList({
                                     todos,
                                     deleteTodo,
                                     completeTodo,
                                     editTodo,
                                 }: TodoListProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <li className={`${todos.done ? "completed" : ""} ${todos.category}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    onChange={() => completeTodo(todos.id)}
                    checked={todos.done}
                />
            </label>
            <input
                className="input-text"
                value={todos.todo}
                ref={inputRef}
                onChange={(e) => editTodo(todos.id, e.target.value)}
            />
            <button className="edit-btn" onClick={() => inputRef.current?.focus()}>
                Edit
            </button>
            <button className="delete-btn" onClick={() => deleteTodo(todos.id)}>
                Delete
            </button>
        </li>
    );
}
