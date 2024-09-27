import React from 'react';
import { Container, Typography } from '@mui/material';
import { TodoForm } from './components/TodoForm.tsx';
import { TodoList } from './components/TodoList.tsx';
import { useTodo } from './hooks/useTodo.ts';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodo();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Todo List
      </Typography>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={removeTodo} />
    </Container>
  );
};

export default App;
