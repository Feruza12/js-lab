import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface TodoFormProps {
  onAddTask: (name: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", marginBottom: "20px" }}
    >
      <TextField
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        variant="outlined"
        fullWidth
        style={{ marginRight: "10px" }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TodoForm;
