import React from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="flex w-1/2 border rounded justify-between items-center">
      <div
        onClick={() => onToggle(todo.id)}
        className="flex items-center justify-between p-2 cursor-pointer w-full text-center"
      >
        <p
          onClick={() => onToggle(todo.id)}
          className={
            todo.completed
              ? "line-through text-gray-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          {todo.task}
        </p>
        <p>{todo.completed ? "Completed!" : ""}</p>
      </div>

      <div>
        <button
          onClick={() => onRemove(todo.id)}
          className="border rounded bg-red-500 p-2 text-white z-10"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
