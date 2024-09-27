import React from 'react';
import MyButton from './UI/button/MyButton';

const TodoItem = ({ todo, number, toggleDone, remove }) => {
  return (
    <div className={`todo ${todo.isDone ? 'done' : ''}`}>
      <div className="todo__content">
        <strong
          style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}
        >{number}. {todo.title}</strong>
      </div>
      <div className="todo__btns">
        <MyButton onClick={() => toggleDone(todo.id)}>
          {todo.isDone ? 'Cancel' : 'Done'}
        </MyButton>
        <MyButton onClick={() => remove(todo)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default TodoItem;
