import { z } from "zod";

export const createTodoSchema = z.object({
  name: z.string(),
});
