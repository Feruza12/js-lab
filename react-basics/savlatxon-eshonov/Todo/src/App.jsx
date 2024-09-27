import React from "react";
import "./styles/App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, createTodo, deleteTodo, toggleDone } = useTodos();

  return (
    <div className="App">
      <TodoForm create={createTodo} />
      {todos.length ? (
        <TodoList
          remove={deleteTodo}
          title="My Todos"
          todos={todos}
          toggleDone={toggleDone}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>No tasks left!!</h1>
      )}
    </div>
  );
}

export default App;
