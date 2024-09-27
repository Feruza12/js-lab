import { Todo } from "../types/todo";
import { TodoView } from "./todoView";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todos, setTodos }: TodoListProps) {
  function toggleTaskCompletion(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function removeTodo(id: number) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  console.log(todos);

  return (
    <div className="space-y-4 mb-4">
      {todos.map((todo) => (
        <div className="flex items-center justify-between" key={todo.id}>
          <div className="flex space-x-4">
            <TodoView todo={todo} />
            <input
              checked={todo.completed}
              type="checkbox"
              onChange={() => toggleTaskCompletion(todo.id)}
            />
          </div>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
