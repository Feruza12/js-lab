import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { createTodoSchema } from "../../schemas";
import { TodoFormProps } from "./TodoForm.types";
import type { CreateTodoSchema } from "../../Todo.types";
import { Button, TextField } from "@mui/material";

export function TodoForm({ addTodo }: TodoFormProps) {
  const { handleSubmit, register, reset } = useForm<CreateTodoSchema>({
    resolver: zodResolver(createTodoSchema),
  });

  function onSubmit(data: CreateTodoSchema) {
    addTodo(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-6 mb-5">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
        {...register("name")}
      />
      <Button variant="contained" size="medium">
        Submit
      </Button>
    </form>
  );
}
