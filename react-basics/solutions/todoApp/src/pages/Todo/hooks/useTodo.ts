import { useState } from "react";
import { TodoModel } from "../Todo.types";
import { CreateTodoSchema } from "../Todo.types";
import { v4 as uuidv4 } from "uuid";

export function useTodo() {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  function removeTodo(id: string) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function addTodo(data: CreateTodoSchema) {
    setTodos([...todos, { ...data, id: uuidv4(), completed: false }]);
  }

  function toggleTaskCompletion(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return { todos, removeTodo, addTodo, toggleTaskCompletion };
}
