import React from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { useAddTodo } from '../hooks/useAddTodo';

const TodoForm = ({ create }) => {
  const { todo, addNewTodo, handleInputChange } = useAddTodo(create);

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Write your Todo"
        value={todo.title}
        onChange={handleInputChange}
      />
      <MyButton onClick={addNewTodo}>Create todo</MyButton>
    </form>
  );
};

export default TodoForm;
