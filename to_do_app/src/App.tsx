import React from "react";
import { useTodo } from "./hooks/useTodo";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodo();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </div>
  );
};

export default App;
