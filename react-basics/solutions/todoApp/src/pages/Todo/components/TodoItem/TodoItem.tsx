import { TodoModel } from "../../Todo.types";

export function TodoItem({ todo }: { todo: TodoModel }) {
  return (
    <div>
      <p className={todo.completed ? "line-through text-gray-600" : ""}>
        {todo.name}
      </p>
    </div>
  );
}
