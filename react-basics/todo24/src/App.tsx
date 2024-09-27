import "./App.css";
import { Todo } from "./interfaces/todo.interface";
import { TodoApi } from "./todo-api/todo.api";
import { useEffect, useState } from "react";
import { TodoEventEmitter } from "./todo-event-emitter";
import { TodoEnterForm } from "./Todo/TodoEnterForm/TodoEnterForm.component";
import { TodoList } from "./Todo/TodoList/TodoList.component";

const todoApi = TodoApi.getInstance();

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    TodoEventEmitter.on("update", () => {
      setTodos(() => [...todoApi.getTodos()]);
    });
  }, [todos]);

  return (
    <>
      <h1 className="title">Todo 24</h1>
      <TodoEnterForm />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
