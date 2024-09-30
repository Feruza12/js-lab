import { z } from "zod";
import { createTodoSchema } from "./schemas";

export type TodoModel = {
  id: string;
  name: string;
  completed: boolean;
};

export type CreateTodoSchema = z.infer<typeof createTodoSchema>;
