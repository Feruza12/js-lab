import { Checkbox, Button, ListItem, ListItemText } from "@mui/material";
import { Task } from "../interfaces/Task.interface";

const TodoItem = ({
  task,
  onToggle,
  onRemove,
}: {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}) => {
  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      <ListItemText
        primary={task.name}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "black",
        }}
      />
      <Button onClick={() => onRemove(task.id)} color="error">
        Remove
      </Button>
    </ListItem>
  );
};

export default TodoItem;
