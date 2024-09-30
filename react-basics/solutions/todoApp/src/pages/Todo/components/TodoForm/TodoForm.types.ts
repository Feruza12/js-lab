import { CreateTodoSchema, TodoModel } from "../../Todo.types";

export type TodoFormProps = {
  todos: TodoModel[];
  addTodo: (data: CreateTodoSchema) => void;
};
