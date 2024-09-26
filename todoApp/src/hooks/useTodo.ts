import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Todo {
    id: string;
    todo: string;
    category: string;
    done: boolean;
    editable: boolean;
}

export function useTodo() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [category, setCategory] = useState<string>("business");

    useEffect(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        setTodos(savedTodos);
    }, []);

    function addTodo(): void {
        const newTodos: Todo[] = [
            ...todos,
            {
                id:uuidv4(),
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

    function deleteTodo(id: string): void {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    function completeTodo(id: string): void {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    function editTodo(id: string, text: string): void {
        const index = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[index].todo = text;
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    return {
        todos,
        inputValue,
        setInputValue,
        category,
        setCategory,
        addTodo,
        deleteTodo,
        completeTodo,
        editTodo,
    };
}
