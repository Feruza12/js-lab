import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todoForm'>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        label="Add Todo"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};
