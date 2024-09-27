import { Todo } from "../interfaces/todo.interface";
import { TodoApi } from "../todo-api/todo.api";
import { TodoComponent } from "../Todo.component";
import "./TodoList.styles.css";

const todoApi = TodoApi.getInstance();

export function TodoList({ todos: todos }: { todos: Todo[] }) {
  if (!todos || todos.length === 0) {
    return (
      <div className="no-todos-container">
        <p className="no-todos-message">No todos left!</p>
      </div>
    );
  }

  const allTodosCompleted = todos.every((todo) => todo.completed);
  if (allTodosCompleted) {
    return (
      <div className="no-todos-container">
        <p className="no-todos-message">All todos completed!</p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <TodoComponent todo={todo} />
          <button
            onClick={() => todoApi.deleteTodo(todo.id)}
            className="delete-button"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
