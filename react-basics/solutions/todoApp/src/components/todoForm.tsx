import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { TodoSchema } from "../schemas/todoSchema";
import { Todo } from "../types/todo";

type TodoFormProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoForm({ setTodos, todos }: TodoFormProps) {
  const IDRef = useRef(0);

  const { handleSubmit, register, reset } = useForm<z.infer<typeof TodoSchema>>(
    {
      resolver: zodResolver(TodoSchema),
    },
  );

  function onSubmit(data: z.infer<typeof TodoSchema>) {
    setTodos([...todos, { ...data, id: ++IDRef.current, completed: false }]);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className="p-2 border border-black rounded w-full mb-2"
          {...register("name")}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
