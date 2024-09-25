import React, { useState } from "react";
import "./styles/App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "A", isDone: false},
    { id: 2, title: "B", isDone: false},
    { id: 3, title: "C", isDone: false},
  ]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="App">
      <TodoForm create={createTodo} />
      {todos.length ? (
        <TodoList
          remove={deleteTodo}
          title="My Todos"
          todos={todos}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>No tasks left!!</h1>
      )}
    </div>
  );
}

export default App;
