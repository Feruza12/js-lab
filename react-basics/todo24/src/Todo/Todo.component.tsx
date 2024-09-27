import { Todo } from "./interfaces/todo.interface";
import { TodoApi } from "./todo-api/todo.api";
import "./Todo.styles.css";

const todoApi = TodoApi.getInstance();

export function TodoComponent({ todo }: { todo: Todo }) {
  return (
    <div className="todo-container">
      <div className="todo-checkbox-container">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            todoApi.completeTodo(todo.id);
          }}
          className="todo-checkbox"
        />
      </div>
      <div
        className={`todo-title ${todo.completed ? "completed" : ""}`}
        onClick={() => todoApi.completeTodo(todo.id)}
      >
        {todo.title}
      </div>
    </div>
  );
}
