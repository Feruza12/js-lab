import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import "./main.css";
import TodoCreate from "./TodoCreate";

// Define the types for a Todo item
interface Todo {
    id: number;
    todo: string;
    category: string;
    done: boolean;
    editable: boolean;
}

export default function TodoItem() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [category, setCategory] = useState<string>("business");

    // Use Effect to load saved todos from localStorage
    useEffect(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        setTodos(savedTodos);
    }, []);

    // Add new todo
    function addTodo(): void {
        const newTodos: Todo[] = [
            ...todos,
            {
                id: Date.now(),
                todo: inputValue,
                category,
                done: false,
                editable: false,
            },
        ];
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setInputValue("");
    }

    // Delete todo by id
    function deleteTodo(id: number): void {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    // Toggle complete status of todo
    function completeTodo(id: number): void {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    // Edit todo by id
    function editTodo(id: number, text: string): void {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[index].todo = text;
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    return (
        <div className="todo">
        <div className="todo__container">
            <h1>
                Whats up,
        <input
            className="todo__input"
    type="text"
    placeholder="name here..."
        />
        </h1>

        <TodoForm
    addTodo={addTodo}
    inputValue={inputValue}
    setInputValue={setInputValue}
    category={category}
    setCategory={setCategory}
    />
    </div>

    <TodoCreate
    todos={todos}
    setInputValue={setInputValue}
    deleteTodo={deleteTodo}
    completeTodo={completeTodo}
    editTodo={editTodo}
    />
    </div>
);
}
