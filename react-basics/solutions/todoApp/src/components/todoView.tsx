import { Todo } from "../types/todo";

export function TodoView({ todo }: { todo: Todo }) {
  return (
    <div>
      <p className={todo.completed ? "line-through text-gray-600" : ""}>
        {todo.name}
      </p>
    </div>
  );
}
