import { useState } from "react";
import DeleteTodo from "./DeleteTodo";

function TodoList(props: {
  id: number;
  task: string;
  completed: boolean;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  const { id, task, completed, toggleCompleted, deleteTodo } = props;
  const [checked, setIsChecked] = useState(completed);

  function handleChange() {
    setIsChecked((checked) => !checked);
    toggleCompleted(id);
  }

  return (
    <>
      <li className="p-2 rounded-lg">
        <div className="flex align-middle flex-row justify-between">
          <div className="p-2">
            <input
              type="checkbox"
              className="h-6 w-6 "
              checked={checked}
              onChange={handleChange}
              value="true"
            />
          </div>
          <div className="p-2">
            <p
              className={`text-lg text-gray-400 ${
                completed ? "line-through" : ""
              }`}
            >
              {task}
            </p>
          </div>
          {/* could be provided by the parent component */}
          <DeleteTodo deleteTodo={deleteTodo} id={id} />
        </div>
        <hr className="mt-2" />
      </li>
    </>
  );
}

export default TodoList;
