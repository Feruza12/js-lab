import { useEffect, useState } from "react";
import { TodoMessage, TodoList, TodoForm } from "./components";
import { useTodo } from "./hooks";

export function Todo() {
  const { todos, removeTodo, addTodo, toggleTaskCompletion } = useTodo();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const allTodosCompleted = todos.every((todo) => todo.completed === true);

    if (todos.length === 0) {
      setMessage("No tasks are left");
    } else if (allTodosCompleted) {
      setMessage("All tasks are completed");
    } else {
      setMessage("");
    }
  }, [todos]);

  return (
    <main>
      <TodoForm todos={todos} addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      {message !== "" && <TodoMessage message={message} />}
    </main>
  );
}
