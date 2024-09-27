import useTodo from "./hooks/useTodo";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Container, Typography } from "@mui/material";

const App = () => {
  const { tasks, message, addTask, toggleCompletion, removeTask } = useTodo();

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center">
        To-Do List
      </Typography>
      <TodoForm onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onToggle={toggleCompletion}
        onRemove={removeTask}
      />
      {message && (
        <Typography variant="h6" align="center" color="textSecondary">
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default App;
