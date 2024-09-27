import { useState } from 'react';

export const useAddTodo = (create) => {
  const [todo, setTodo] = useState({ title: '' });

  const addNewTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      ...todo, id: Date.now()
    };
    create(newTodo);
    setTodo({ title: '' });
  };

  const handleInputChange = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };

  return {
    todo,
    addNewTodo,
    handleInputChange,
  };
};
