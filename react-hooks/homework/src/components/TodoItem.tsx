import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </ListItemText>
      <IconButton onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
