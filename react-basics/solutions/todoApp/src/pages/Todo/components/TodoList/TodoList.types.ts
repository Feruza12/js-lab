import { TodoModel } from "../../Todo.types";

export type TodoListProps = {
  todos: TodoModel[];
  removeTodo: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
};
