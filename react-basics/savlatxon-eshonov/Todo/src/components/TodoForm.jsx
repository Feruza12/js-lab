import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const TodoForm = ({create}) => {
  const [todo, setTodo] = useState({title: ''})

  const addNewTodo = (event) => {
    event.preventDefault()
    const newTodo = {
      ...todo, id: Date.now()
    }
    create(newTodo)
    setTodo({title: ''})
  }

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Write your Todo"
        value={ todo.title }
        onChange={event => setTodo({...todo, title: event.target.value})}
      ></MyInput>

      <MyButton onClick={ addNewTodo } >Create todo</MyButton>
    </form>
  );
}

export default TodoForm