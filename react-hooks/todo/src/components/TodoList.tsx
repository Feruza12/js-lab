import { List } from "@mui/material";
import TodoItem from "./TodoItem";
import { Task } from "../interfaces/Task.interface";

const TodoList = ({
  tasks,
  onToggle,
  onRemove,
}: {
  tasks: Task[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}) => {
  return (
    <List>
      {tasks.map((task: any) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </List>
  );
};

export default TodoList;
