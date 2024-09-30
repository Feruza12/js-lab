import { Button, Checkbox } from "@mui/material";
import { TodoItem } from "../TodoItem";
import { TodoListProps } from "./TodoList.types";

export function TodoList({
  todos,
  removeTodo,
  toggleTaskCompletion,
}: TodoListProps) {
  return (
    <div className="space-y-4 mb-4">
      {todos.map((todo) => (
        <div className="flex items-center justify-between" key={todo.id}>
          <TodoItem todo={todo} />
          <div className="flex space-x-4">
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleTaskCompletion(todo.id)}
            />
            <Button
              size="medium"
              onClick={() => removeTodo(todo.id)}
              variant="contained"
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
