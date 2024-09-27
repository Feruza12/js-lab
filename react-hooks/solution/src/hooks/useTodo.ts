import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../interfaces/interface';

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string) => {
    setTodos([...todos, { 
        id: uuidv4(),
        name,
        completed: false
    }]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, removeTodo };
};
