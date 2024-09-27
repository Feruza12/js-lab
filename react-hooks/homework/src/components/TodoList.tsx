import React from 'react';
import { TodoItem } from './TodoItem.tsx';
import { List } from '@mui/material';

interface TodoListProps {
  todos: Array<{ id: string, text: string, completed: boolean }>;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </List>
  );
};
